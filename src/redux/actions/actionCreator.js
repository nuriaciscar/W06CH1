import actionTypes from "./actionTypes";

export const loadtoDoList = (toDoList) => ({
  type: actionTypes.loadtoDoList,
  toDoList,
});
