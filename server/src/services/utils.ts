import Twitter from 'twitter';

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
});

export default function twitterGet(url: string, query: {[key: string]: any}){
  return new Promise((resolve, reject)=>{
    client.get(url, query, function(error, resObj) {
      if(error) reject(error)
      resolve(resObj)
    });
  })
}