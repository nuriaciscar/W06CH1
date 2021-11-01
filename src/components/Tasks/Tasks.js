import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useToDoList from "../../hooks/useToDoList";
import Task from "../Task/Task";

const Tasks = () => {
  const { toDoList, loadToDoList } = useToDoList();
  const dispatch = useDispatch();

  useEffect(() => {
    loadToDoList();
  }, [dispatch, loadToDoList]);

  return (
    <ul>
      {toDoList.map((toDo) => {
        <Task key={toDo.id} name={toDo.name} />;
      })}
    </ul>
  );
};

export default Tasks;
