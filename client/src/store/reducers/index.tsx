import { combineReducers } from "redux";
import getData from "./getData";
import formControl from "./formControl";

export default combineReducers({
  getData,
  formControl,
})