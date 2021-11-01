const Task = ({ id, task }) => {
  return (
    <div className="form">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="check"></input>
        <label className="form-check-label">{task}</label>
      </div>

      <div className="form-buttons">
        <button className="btn btn-dark btn-sm" type="button">
          Edit
        </button>
        <button className="btn btn-danger btn-sm" type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
