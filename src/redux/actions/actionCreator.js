import actionTypes from "./actionTypes";

export const loadCookiesList = (cookies) => ({
  type: actionTypes.loadCookiesList,
  cookies,
});
