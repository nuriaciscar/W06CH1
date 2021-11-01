import toDoReducer from "./toDoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDoList: toDoReducer,
});

export default rootReducer;
