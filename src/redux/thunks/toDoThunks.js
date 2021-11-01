
import { useDispatch } from "react-redux";
import { loadtoDoListAction } from "../actions/actionCreator";

const dispatch = useDispatch();
const urlApi = process.env.REACT_APP_URL_API;

const toDoListThunk = async () => async (dispatch) => {
  const response = await fetch(urlApi);
  const toDoList = await response.json();
  dispatch(loadtoDoListAction(toDoList));
};

const postLocalApi = 
  async (tasks) => {
    const response = await fetch(urlApi, {
      method: "POST",
      body: JSON.stringify(tasks),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const task = await response.json();
    dispatch(postLocalApi(task));
  };

console.log(urlApi);

export default toDoListThunk, postLocalApi;
