import { loadtoDoListAction } from "../actions/actionCreator";

const toDoListThunk = async () => async (dispatch) => {
  const response = await fetch();
  const toDoList = await response.json("http://localhost:4000/toDo");
  dispatch(loadtoDoListAction(toDoList));
};

export default toDoListThunk;
