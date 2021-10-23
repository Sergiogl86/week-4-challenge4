import { useContext, useEffect, useState } from "react";
import FormContext from "../Context/Context";
import Boton from "../Boton/Boton";

const KeyUserData = ({ state }) => {
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

  return !state ? (
    <></>
  ) : (
    <>
      <div className="form-group mx-sm-3">
        <label htmlFor="username">Username:</label>
        <input
          className="form-control"
          id="username"
          type="text"
          name="username"
          required
          autoComplete="off"
          value={personalDataInput.username}
          onChange={changePersonalData}
        />
      </div>
      <div className="form-group mx-sm-3">
        <label htmlFor="password">Password:</label>
        <input
          className="form-control"
          id="password"
          type="text"
          name="password"
          required
          autoComplete="off"
          value={personalDataInput.password}
          onChange={changePersonalData}
        />
      </div>
      <div className="form-group mx-sm-3">
        <label htmlFor="password">Repita el Password:</label>
        <div className="container row p-0">
          <div className="col-10">
            <input
              className="form-control"
              id="password-repeat"
              type="text"
              name="password-repeat"
              required
              autoComplete="off"
              value={passwordRepeat}
              onChange={changepasswordRepeat}
            />
          </div>
          <div className="col-2 border rounded border-success align-self-center">
            <div className="text-center"> {passwordError} </div>
          </div>
        </div>
      </div>
      <div className="form-group mx-sm-3 mt-3">
        <div className="align-items-end container d-flex flex-column mt-3 p-0">
          <Boton
            text={"Atras"}
            state={true}
            actionOnClick={() => console.log("Boton")}
          />
          <button type="submit" className="btn btn-primary mt-3">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default KeyUserData;
