import { SEARCH, PAGE, ROWS_PER_PAGE } from "../types";

interface IState {
  search: string;
  page: number;
  rowsPerPage: number;
} 

export const initialState: IState = {
  search: '',
  page: 1,
  rowsPerPage: 5,
}

const formControlReducer = (state = initialState, action: any) => {
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

export default formControlReducer;