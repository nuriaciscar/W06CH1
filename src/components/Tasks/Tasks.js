import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useToDoList from "../../hooks/useToDoList";

const Tasks = () => {
  const {toDoList, loadToDoList} = useToDoList();
  const dispatch = useDispatch ();
 
  useEffect(() => {
    loadToDoList();
  }, [dispatch]);

  return(
  toDoList,
  loadToDoList
  );
}

export default Tasks;