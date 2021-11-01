const Form = (text) => {
  return (
    <form autoComplete="off">
      <label>{text}</label>
      <input type="text">{text}</input>
      <button type="submit">{text}</button>
    </form>
  );
};

export default Form;
