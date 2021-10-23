import { useContext } from "react";
import FormContext from "../Context/Context";
import PersonalData from "./../PersonalData/PersonalData";
import KeyUserData from "./../KeyUserData/KeyUserData";

const Formulario = () => {
  const {
    userData,
    setUserData,
    initialPersonalData,
    personalDataInput,
    setPersonalDataInput,
    changePersonalData,
    insertPersonalData,
    onSubmit,
  } = useContext(FormContext);

  return (
    <div className="container-sm">
      <form className="form-inline" onSubmit={insertPersonalData}>
        <PersonalData state={true} />
        <KeyUserData state={true} />
      </form>
      <pre style={{ textAlign: "left" }}>
        <div>{JSON.stringify(personalDataInput)}</div>
      </pre>
    </div>
  );
};

export default Formulario;
