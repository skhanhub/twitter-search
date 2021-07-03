import API from "../../utilities/API";
import { LOADING, ERROR, SEARCH_USERS, GET_USER_DETAILS, SEARCH, PAGE, ROWS_PER_PAGE } from "../types";

export const searchUsers = (search: string, page: number, rowsPerPage: number) => async (dispatch: any) => {
  try {
    dispatch({ type: LOADING, payload: true })
    if(search){
      const DATA = await API.searchUsers(search, page, rowsPerPage);
      dispatch({ type: SEARCH_USERS, payload: DATA })
    }
    dispatch({ type: ERROR, payload: null })
    dispatch({ type: LOADING, payload: false })
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message })
    dispatch({ type: LOADING, payload: false })
  }
}



export const getUserDetails = (screen_name: string) => async (dispatch: any) => {
  try {
    dispatch({ type: LOADING, payload: true })
    const DATA = await API.getUserDetails(screen_name);

    dispatch({ type: ERROR, payload: null })
    dispatch({ type: GET_USER_DETAILS, payload: DATA })
    dispatch({ type: LOADING, payload: false })
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message })
    dispatch({ type: LOADING, payload: false })
  }
}

export const setPageNumber = (pageNumber: number) => (dispatch: any) =>  dispatch({ type: PAGE, payload: pageNumber })

export const setSearchText = (search: string) => (dispatch: any) =>  dispatch({ type: SEARCH, payload: search })

export const setRowsPerPage = (rowsPerPage: number) => (dispatch: any) =>  dispatch({ type: ROWS_PER_PAGE, payload: rowsPerPage })
