import Twitter from 'twitter';
import express from 'express'
 

interface IUserThin {
  id: number;
  name: string;
  screen_name: string;
}

interface IUser {
  id: number;
  name: string;
  screen_name: string;
  profile_image_url_https: string;
  followers_count: number;
  last_five_tweets: string[];
}

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
});

function twitterGet(client: any, url: string, query: any){
  return new Promise((resolve, reject)=>{
    client.get(url, query, function(error: any, resObj: any) {
      if(error) reject(error)
      resolve(resObj)
    });
  })
}

// Defining methods for the userController
module.exports = {
    search: async function(req: express.Request, res: express.Response) {

      const QUERY = {
        q: req.query.q,
        page: req.query.page || 1,
        count: req.query.count || 5,
      }
      try{
        const USERS: any = await twitterGet(client, 'users/search.json', QUERY)
        const USER_LIST = USERS.map((user:any): IUserThin => ({
          screen_name: user.screen_name,
          id: user.id,
          name: user.name,
        }))
        console.log(USER_LIST);
        res.json(USER_LIST)
      }
      catch(err){
        console.log(err)
        res.status(422).json(err)
      }
    },
    show: async function(req: express.Request, res: express.Response) {

      try{
        console.log("USER")
        const USER: any = await twitterGet(
          client,
          'users/show.json', 
          {
            id: req.query.q
          }
        );

        const TWEETS: any = await twitterGet(
          client,
          'statuses/user_timeline.json', 
          {
            id: USER.id,
            count: 5,
          }
        );
  
        const USER_DETAILS: IUser = {
          id: USER.id,
          name: USER.name,
          screen_name: USER.screen_name,
          profile_image_url_https: USER.profile_image_url_https,
          followers_count: USER.followers_count,
          last_five_tweets: TWEETS.map((tweet: any)=>tweet.text),
        }                  
        
        console.log(USER_DETAILS);
        res.json(USER_DETAILS)
        
      }
      catch(err){
        console.log(err)
        res.status(422).json(err)
      }


    },
};

