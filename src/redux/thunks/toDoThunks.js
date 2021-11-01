import { loadtoDoListAction } from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_URL_API;

const toDoListThunk = async () => async (dispatch) => {
  const response = await fetch();
  const toDoList = await response.json("urlApi");
  dispatch(loadtoDoListAction(toDoList));
};

export default toDoListThunk;
