
import twitterClient from "./twitter.client";
 
export interface ITweet{
  tweet: string,
  id: number,
}
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
  last_five_tweets: ITweet[];
}



export default {
  searchTwitter: async function(query: string, page: number = 1, count: number = 5) {
    
    const users: any = await twitterClient.get("users/search.json", {
      q: query,
      page,
      count,
    })
    const userList = users.map((user: any): IUserThin => ({
      screen_name: user.screen_name,
      id: user.id,
      name: user.name,
    }))

    return userList;
  },
  getUserDetails: async function(screen_name: string) {
      
    const user: any = await twitterClient.get(
      "users/show.json", 
      {
        screen_name
      }
    );
    const tweets: any = await twitterClient.get(
      "statuses/user_timeline.json", 
      {
        id: user.screen_name,
        count: 5,
      }
    );

    const userDetails: IUser = {
      id: user.id,
      name: user.name,
      screen_name: user.screen_name,
      profile_image_url_https: user.profile_image_url_https,
      followers_count: user.followers_count,
      last_five_tweets: tweets.map((tweet: any): ITweet=>({
        id: tweet.id,
        tweet: tweet.text
      })),
    }                  

    return userDetails;
  },
};

