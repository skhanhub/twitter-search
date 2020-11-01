import { LOADING, ERROR, SEARCH_USERS, GET_USER_DETAILS } from "../types";

export interface IUserThin {
  id: number;
  name: string;
  screen_name: string;
}

export interface ITweet{
  tweet: string,
  id: number,
}

interface IUser {
  id: number;
  name: string;
  screen_name: string;
  profile_image_url_https: string;
  followers_count: number;
  last_five_tweets: ITweet[];
} 

interface IState {
  users: IUserThin[];
  userDetails: IUser | null;
  loading: boolean;
  error: string | null;
} 

const initialState: IState = {
  users: [],
  userDetails: null,
  loading: false,
  error: null,
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload }
    case ERROR:
      return { ...state, error: action.payload }
    case SEARCH_USERS:
      return { ...state, users: action.payload }
    case GET_USER_DETAILS:
      return { ...state, userDetails: action.payload }
    default:
      return state
  }
}