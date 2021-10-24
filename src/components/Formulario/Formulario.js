import { useContext } from "react";
import FormContext from "../Context/Context";
import PersonalData from "./../PersonalData/PersonalData";
import KeyUserData from "./../KeyUserData/KeyUserData";

const Formulario = () => {
  const {
    personalDataInput,

    formStates,
  } = useContext(FormContext);

  return (
    <>
      <PersonalData state={formStates.statePersonalData} />
      <KeyUserData state={formStates.stateKeyUserData} />

      <pre style={{ textAlign: "left" }}>
        <div>{JSON.stringify(personalDataInput)}</div>
      </pre>
    </>
  );
};

export default Formulario;
