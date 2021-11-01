import { useState } from "react";
import useToDoList from "../../hooks/useToDoList";

const Form = () => {
  const initialData = {
    task: "",
  };

  const [taskData, setTaskData] = useState(initialData);
  const changeData = (event) => {
    setTaskData({
      ...taskData,
      [event.target.id]: event.target.value,
    });
  };

  const { createTask, loadToDoList } = useToDoList();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    createTask(taskData);
    loadToDoList();
    setTaskData(initialData);
  };

  return (
    <form autoComplete="off" onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={changeData}
        id="task"
        value={taskData.task}
      />

      <button type="submit">CREATE</button>
    </form>
  );
};

export default Form;
