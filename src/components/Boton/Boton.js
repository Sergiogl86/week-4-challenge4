const Boton = ({ text, state, actionOnClick, className }) => {
  return !state ? (
    <></>
  ) : (
    <button onClick={actionOnClick} type="button" className={className}>
      {text}
    </button>
  );
};

export default Boton;
