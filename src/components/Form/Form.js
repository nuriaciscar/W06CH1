const Form = ({ text, submitDisabled }) => {
  return (
    <form autoComplete="off">
      <label>{text}</label>
      <input type="text">{text}</input>
      <button type="submit" disabled={submitDisabled}>
        {text}
      </button>
    </form>
  );
};

export default Form;
