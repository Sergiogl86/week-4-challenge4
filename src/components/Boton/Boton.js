const Boton = ({ text, state, actionOnClick }) => {
  return !state ? (
    <></>
  ) : (
    <button onClick={actionOnClick} type="button" className="btn btn-primary">
      {text}
    </button>
  );
};

export default Boton;
