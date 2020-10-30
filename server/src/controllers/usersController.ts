import Twitter from 'twitter';
import express from 'express'
 
interface IUserThin {
  id: string;
  name: string;
  screen_name: number;
}

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
});


// Defining methods for the booksController
module.exports = {
    search: function(req: express.Request, res: express.Response) {

      const QUERY = {
        q: req.query.q,
        page: req.query.page || 1,
        count: req.query.count || 5,
      }

      client.get('users/search.json', QUERY, function(error, users, response) {
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
};