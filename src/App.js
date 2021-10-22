import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import PersonalData from "./components/PersonalData/PersonalData";
import KeyUserData from "./components/KeyUserData/KeyUserData";
import FormContext from "./components/Context/Context";
import MostrarObjeto from "./components/MostrarObjeto/MostarObjeto";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  });

  const initialPersonalData = {
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  };

  const [personalDataInput, setPersonalDataInput] =
    useState(initialPersonalData);

  const changePersonalData = (event) => {
    setPersonalDataInput({
      ...personalDataInput,
      [event.target.id]: event.target.value,
    });
  };

  const insertPersonalData = (event) => {
    event.preventDefault();
    onSubmit(personalDataInput);
  };
  const onSubmit = () => {
    setUserData(personalDataInput);
  };

  return (
    <>
      <FormContext.Provider
        value={{
          userData,
          setUserData,
          initialPersonalData,
          personalDataInput,
          setPersonalDataInput,
          changePersonalData,
          insertPersonalData,
        }}
      >
        <header>
          <h1>Week 4 Challenge 4</h1>
        </header>
        <PersonalData />
        <KeyUserData />
        <MostrarObjeto />
      </FormContext.Provider>
    </>
  );
}

export default App;
