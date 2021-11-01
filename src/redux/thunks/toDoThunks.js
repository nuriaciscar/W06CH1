import {
  createTasksAction,
  loadtoDoListAction,
} from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_URL_API;

export const toDoListThunk = () => async (dispatch) => {
  const response = await fetch(urlApi);
  const toDoList = await response.json();

  dispatch(loadtoDoListAction(toDoList));
};

export const createTaskThunk = (tasks) => async (dispatch) => {
  const response = await fetch(urlApi, {
    method: "POST",
    body: JSON.stringify(tasks),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const task = await response.json();

  dispatch(createTasksAction(task));
};
