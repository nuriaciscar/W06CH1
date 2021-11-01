import actionTypes from "./actionTypes";

export const loadtoDoListAction = (toDoList) => ({
  type: actionTypes.loadtoDoListAction,
  toDoList,
});

export const getLocalApiAction = (task) => ({
  type: actionTypes.getLocalApi,
  task,
});
