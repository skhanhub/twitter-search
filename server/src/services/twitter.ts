
import twitterGet from "./utils";
 
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
  searchTwitter: async function(query: any, page: any = 1, count: any = 5) {
    try{
      const users: any = await twitterGet('users/search.json', {
        q: query,
        page,
        count,
      })
      const userList = users.map((user:any): IUserThin => ({
        screen_name: user.screen_name,
        id: user.id,
        name: user.name,
      }))

      return userList;
    }
    catch(err){
      throw new Error(err);
    }
  },
  getUserDetails: async function(screen_name: any) {

    try{
      
      const user: any = await twitterGet(
        'users/show.json', 
        {
          screen_name
        }
      );
      const tweets: any = await twitterGet(
        'statuses/user_timeline.json', 
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
        last_five_tweets: tweets.map((tweet: any)=>({
          id: tweet.id,
          tweet: tweet.text
        })),
      }                  

      return userDetails;
      
    }
    catch(err){
      throw new Error(err);
    }


  },
};

