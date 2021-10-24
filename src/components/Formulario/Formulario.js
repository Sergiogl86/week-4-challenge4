import { useContext } from "react";
import FormContext from "../Context/Context";
import PersonalData from "./../PersonalData/PersonalData";
import KeyUserData from "./../KeyUserData/KeyUserData";

const Formulario = () => {
  const { formStates } = useContext(FormContext);

  return (
    <>
      <PersonalData state={formStates.statePersonalData} />
      <KeyUserData state={formStates.stateKeyUserData} />
    </>
  );
};

export default Formulario;
