import API from "../../utilities/API";
import { LOADING, ERROR, SEARCH_USERS, GET_USER_DETAILS } from "../types";

export const searchUsers = (search: string) => async (dispatch: any) => {

  try {
    dispatch({ type: LOADING, payload: true })
    const DATA = await API.searchUsers(search);

    dispatch({ type: SEARCH_USERS, payload: DATA })
    dispatch({ type: LOADING, payload: false })
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message })
    dispatch({ type: LOADING, payload: false })
  }
}


export const getUserDetails = (id: number) => async (dispatch: any) => {

  try {
    dispatch({ type: LOADING, payload: true })
    const DATA = await API.getUserDetails(id);

    dispatch({ type: GET_USER_DETAILS, payload: DATA })
    dispatch({ type: LOADING, payload: false })
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message })
    dispatch({ type: LOADING, payload: false })
  }
}