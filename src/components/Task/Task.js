const Task = ({ id, task }) => {
  return (
    <div>
      <p>{task}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
