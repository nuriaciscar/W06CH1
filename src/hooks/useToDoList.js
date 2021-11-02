import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toDoListThunk,
  createTaskThunk,
  deleteTaskThunk,
} from "../redux/thunks/toDoThunks";

const useToDoList = () => {
  const task = useSelector(({ toDoList }) => toDoList);
  const dispatch = useDispatch();

  const loadToDoList = useCallback(() => {
    dispatch(toDoListThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createTaskThunk(task));
  };

  const deleteTask = (id) => {
    dispatch(deleteTaskThunk(id));
  };

  return { task, loadToDoList, createTask, deleteTask };
};

export default useToDoList;
