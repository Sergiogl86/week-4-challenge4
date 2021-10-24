import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import FormContext from "./components/Context/Context";
import MostrarObjeto from "./components/MostrarObjeto/MostarObjeto";
import Formulario from "./components/Formulario/Formulario";
import Boton from "./components/Boton/Boton";
import Ficha from "./components/Ficha/Ficha";

function App() {
  const [userData, setUserData] = useState([]);

  const initialPersonalData = {
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  };

  const [formStates, setFormStates] = useState({
    statePersonalData: false,
    stateKeyUserData: false,
    stateFicha: false,
  });

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
    setUserData([...userData, personalDataInput]);
    setPersonalDataInput(initialPersonalData);
    setFormStates({
      ...formStates,
      statePersonalData: false,
      stateKeyUserData: false,
    });
    setPasswordRepeat("");
  };

  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (
      passwordRepeat === personalDataInput.password &&
      passwordRepeat !== ""
    ) {
      setPasswordError("Ok");
    } else if (passwordRepeat !== "") {
      setPasswordError("Password Error");
    }
  }, [passwordRepeat, personalDataInput.password]);

  const changepasswordRepeat = (event) => {
    setPasswordRepeat(event.target.value);
  };

  const siguiente = () => {
    setFormStates({
      ...formStates,
      statePersonalData: false,
      stateKeyUserData: true,
    });
  };

  const atras = () => {
    setFormStates({
      ...formStates,
      statePersonalData: true,
      stateKeyUserData: false,
    });
  };

  const añadirUsuario = () => {
    setFormStates({
      ...formStates,
      statePersonalData: true,
      stateKeyUserData: false,
    });
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
          formStates,
          setFormStates,
          siguiente,
          atras,
          passwordRepeat,
          setPasswordRepeat,
          passwordError,
          setPasswordError,
          changepasswordRepeat,
        }}
      >
        <header>
          <h1>Week 4 Challenge 4</h1>
          <nav className="navbar navbar-light bg-light">
            <form className="container-fluid justify-content-start">
              <Boton
                text="Añadir Usuario"
                state={true}
                actionOnClick={añadirUsuario}
                className="btn btn-outline-success me-2"
              />

              <button className="btn btn-outline-success me-2" type="button">
                Smaller button
              </button>
            </form>
          </nav>
        </header>
        <Formulario />
        <MostrarObjeto />
        <Ficha state={formStates.stateFicha} />
      </FormContext.Provider>
    </>
  );
}

export default App;
