import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toDoListThunk, createTaskThunk } from "../redux/thunks/toDoThunks";

const useToDoList = () => {
  const task = useSelector(({ toDoList }) => toDoList);
  const dispatch = useDispatch();

  const loadToDoList = useCallback(() => {
    dispatch(toDoListThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createTaskThunk(task));
    console.log("Hola");
  };

  return { task, loadToDoList, createTask };
};

export default useToDoList;
