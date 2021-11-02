import actionTypes from "./actionTypes";

export const loadtoDoListAction = (toDoList) => ({
  type: actionTypes.loadtoDoList,
  toDoList,
});

export const createTasksAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const deleteTasksAction = (task) => ({
  type: actionTypes.deleteTask,
  task,
});
