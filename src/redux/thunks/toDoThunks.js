import {
  createTasksAction,
  deleteTasksAction,
  loadtoDoListAction,
} from "../actions/actionCreator";

// const urlApi = process.env.REACT_APP_URL_API;

export const toDoListThunk = () => async (dispatch) => {
  const response = await fetch(
    "https://redux-challenge-api.herokuapp.com/toDo/"
  );
  const toDoList = await response.json();

  dispatch(loadtoDoListAction(toDoList));
};

export const createTaskThunk = (tasks) => async (dispatch) => {
  const response = await fetch(
    "https://redux-challenge-api.herokuapp.com/toDo/",
    {
      method: "POST",
      body: JSON.stringify(tasks),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const task = await response.json();

  dispatch(createTasksAction(task));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `https://redux-challenge-api.herokuapp.com/toDo/${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    dispatch(deleteTasksAction(id));
  }
};
