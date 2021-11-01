const Form = ({ text, submitDisabled }) => {
  return (
    <form autoComplete="off">
      <label>{text}</label>
      <input type="text">{text}</input>
      <button type="button" disabled={submitDisabled}>
        {text}
      </button>
    </form>
  );
};

export default Form;
