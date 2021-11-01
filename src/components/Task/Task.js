const Task = ({ id, name, text }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Task;
