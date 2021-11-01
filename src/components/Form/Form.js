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
    console.log(event.target.value);
  };

  const { createTask, loadToDoList } = useToDoList();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    createTask(taskData);
    console.log(taskData);
    loadToDoList();
    setTaskData(initialData);
  };

  return (
    <div className="form-group">
      <form
        autoComplete="off"
        onSubmit={handleOnSubmit}
        className="form-inline"
      >
        <input
          type="text"
          onChange={changeData}
          id="task"
          value={taskData.task}
          className="form-control 2"
          placeholder="To Do..."
        />

        <button className="btn btn-primary" type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
