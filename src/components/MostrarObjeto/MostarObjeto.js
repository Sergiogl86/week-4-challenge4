import { useContext } from "react";
import FormContext from "../Context/Context";

const MostrarObjeto = () => {
  const { userData } = useContext(FormContext);

  return (
    <pre style={{ textAlign: "left" }}>
      <div>{JSON.stringify(userData)}</div>
    </pre>
  );
};

export default MostrarObjeto;
