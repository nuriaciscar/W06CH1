import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useToDoList from "../../hooks/useToDoList";
import Task from "../Task/Task";

const Tasks = () => {
  const { task, loadToDoList } = useToDoList();
  const dispatch = useDispatch();

  useEffect(() => {
    loadToDoList();
  }, [dispatch, loadToDoList]);

  return (
    <>
      <div className="form-check">
        <ul>
          {task.map((taskOne, id) => {
            return <Task key={id} {...taskOne} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
