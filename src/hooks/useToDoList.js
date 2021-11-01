import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import toDoListThunk from "../redux/thunks/toDoThunks";

const useToDoList = () => {
  const toDoList = useSelector(({ toDoList }) => toDoList);
  const dispatch = useDispatch;

  const loadToDoList = useCallback(() => {
    dispatch(toDoListThunk());
  }, [dispatch]);

  return toDoList, loadToDoList;
};

export default useToDoList;
