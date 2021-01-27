import { combineReducers } from "redux";
import { reducer } from "./searchReducer";

export default combineReducers({
  movies: reducer,
});
