import cookiesReducer from "./cookiesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cookies: cookiesReducer,
});

export default rootReducer;
