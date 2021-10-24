import { useContext, useEffect, useState } from "react";
import FormContext from "../Context/Context";
import Boton from "../Boton/Boton";

const KeyUserData = ({ state }) => {
  const { personalDataInput, changePersonalData, insertPersonalData, atras } =
    useContext(FormContext);

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
      <div className="container-sm row">
        <form
          className="form-inline col-9"
          onSubmit={
            passwordRepeat === personalDataInput.password
              ? insertPersonalData
              : (event) => {
                  event.preventDefault();
                }
          }
        >
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
              type="password"
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
              <div className="col-9">
                <input
                  className="form-control"
                  id="password-repeat"
                  type="password"
                  name="password-repeat"
                  required
                  autoComplete="off"
                  value={passwordRepeat}
                  onChange={changepasswordRepeat}
                />
              </div>
              <div className="col-3 border rounded border-success align-self-center">
                <div className="text-center"> {passwordError} </div>
              </div>
            </div>
          </div>
          <div className="form-group mx-sm-3 mt-3">
            <div className="align-items-end container d-flex flex-column mt-3 p-0">
              <Boton text={"Atras"} state={true} actionOnClick={atras} />
              <button type="submit" className="btn btn-primary mt-3">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default KeyUserData;
