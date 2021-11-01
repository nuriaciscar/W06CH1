import { loadtoDoListAction } from "../actions/actionCreator";

const toDoListThunk = async () => async (dispatch) => {
  const response = await fetch("http://localhost:4000/toDo");
  const toDoList = await response.json();
  dispatch(loadtoDoListAction(toDoList));
};

export default toDoListThunk;
