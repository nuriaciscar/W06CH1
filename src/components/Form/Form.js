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
    <div className="form-group">
      <form
        autoComplete="off"
        onSubmit={handleOnSubmit}
        className="form-inline"
      >
        <div className="form-group row">
          <label htmlFor="task" className="col-sm-2 col-form-label">
            Task:
          </label>
        </div>
        <div className="col-sm-10">
          <input
            type="text"
            onChange={changeData}
            id="task"
            value={taskData.task}
            className="form-control 2"
            placeholder="To Do..."
          />
        </div>

        <button className="btn btn-primary" type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
