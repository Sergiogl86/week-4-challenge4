import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import FormContext from "./components/Context/Context";
import Formulario from "./components/Formulario/Formulario";
import Boton from "./components/Boton/Boton";
import Ficha from "./components/Ficha/Ficha";
import Login from "./components/Login/Login";

function App() {
  const [userData, setUserData] = useState([]);

  const [formStates, setFormStates] = useState({
    statePersonalData: false,
    stateKeyUserData: false,
    stateFicha: false,
    stateLogin: false,
  });

  const initialPersonalData = {
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  };

  const initialLoginDataInput = {
    username: "",
    password: "",
    error: "",
  };

  const [loginDataInput, setLoginDataInput] = useState(initialLoginDataInput);

  const changeLoginDataInput = (event) => {
    setLoginDataInput({
      ...loginDataInput,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const usuarioEncontrado = userData.map((usuario) => {
      if (
        usuario.username === loginDataInput.username &&
        usuario.password === loginDataInput.password
      ) {
        setPersonalDataInput({
          ...personalDataInput,
          name: usuario.name,
          lastname: usuario.lastname,
          birthdate: usuario.birthdate,
          email: usuario.email,
          username: usuario.username,
        });
        setFormStates({
          ...formStates,
          stateLogin: false,
          stateFicha: true,
        });
        setLoginDataInput(initialLoginDataInput);
        return usuario;
      } else {
        return setLoginDataInput({
          ...loginDataInput,
          error: "No encontrado",
        });
      }
    });

    setLoginDataInput({
      ...loginDataInput,
      error: "No encontrado",
    });
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
  const goHome = () => {
    setPersonalDataInput(initialPersonalData);
    setLoginDataInput(initialLoginDataInput);
    setFormStates({
      ...formStates,
      statePersonalData: false,
      stateKeyUserData: false,
      stateFicha: false,
      stateLogin: false,
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
      stateFicha: false,
      stateLogin: false,
    });
  };
  const loginUsuario = () => {
    setFormStates({
      ...formStates,
      statePersonalData: false,
      stateKeyUserData: false,
      stateFicha: false,
      stateLogin: true,
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
          loginDataInput,
          changeLoginDataInput,
          onSubmitLogin,
        }}
      >
        <header>
          <h1>Week 4 Challenge 4</h1>
          <nav className="navbar navbar-light bg-light">
            <form className="container-fluid justify-content-start">
              <Boton
                text="Home"
                state={true}
                actionOnClick={goHome}
                className="btn btn-outline-success me-2"
              />

              <Boton
                text="Añadir Usuario"
                state={true}
                actionOnClick={añadirUsuario}
                className="btn btn-outline-success me-2"
              />

              <Boton
                text="Login"
                state={true}
                actionOnClick={loginUsuario}
                className="btn btn-outline-success me-2"
              />
            </form>
          </nav>
        </header>
        <Formulario />
        <Ficha state={formStates.stateFicha} />
        <Login state={formStates.stateLogin} />
      </FormContext.Provider>
    </>
  );
}

export default App;
