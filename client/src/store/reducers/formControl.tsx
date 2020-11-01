import { SEARCH, PAGE, ROWS_PER_PAGE } from "../types";

interface IState {
  search: string | null;
  page: number;
  rowsPerPage: number;
} 

const initialState: IState = {
  search: null,
  page: 1,
  rowsPerPage: 5,
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload }
    case PAGE:
      return { ...state, page: action.payload }
    case ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload }
    default:
      return state
  }
}