import actionTypes from "../actions/actionTypes";

const cookiesReducer = (cookies = [], action) => {
  let newCookies;

  switch (action.type) {
    case actionTypes.loadCookiesList:
      newCookies = [...action.cookies];
      break;

    default:
      newCookies = cookies;
      break;
  }
};

export default cookiesReducer;
