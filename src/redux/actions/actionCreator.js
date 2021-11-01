import actionTypes from "./actionTypes";

export const loadtoDoListAction = (toDoList) => ({
  type: actionTypes.loadtoDoListAction,
  toDoList,
});
