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


// Defining methods for the userController
module.exports = {
    search: function(req: express.Request, res: express.Response) {

      const QUERY = {
        q: req.query.q,
        page: req.query.page || 1,
        count: req.query.count || 5,
      }

      client.get('users/search.json', QUERY, function(error, users) {
        if(error) throw new Error(error)
        
        const USER_LIST = users.map((user:any): IUserThin => ({
          screen_name: user.screen_name,
          id: user.id,
          name: user.name,
        }))
        console.log(USER_LIST);
        res.json(USER_LIST)
      });
    },
    show: function(req: express.Request, res: express.Response) {

      const QUERY = {
        q: req.query.screen_name
      }

      client.get('users/show.json', QUERY, function(error, user) {
        if(error) throw new Error(error)

        const QUERY = {
          screen_name: user.screen_name,
          count: 5,
        }
        client.get('/statuses/user_timeline.json', QUERY, function(error: any, tweets: any) {
          if(error) throw new Error(error)
          const USER_DETAILS: IUser = {
            id: user.id,
            name: user.name,
            screen_name: user.screen_name,
            profile_image_url_https: user.profile_image_url_https,
            followers_count: user.followers_count,
            last_five_tweets: tweets.map((tweet: any)=>tweet.text),
          }          
          
          console.log(USER_DETAILS);
          res.json(USER_DETAILS)
  
        });

      });
    },
};

