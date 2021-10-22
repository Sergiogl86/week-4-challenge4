import { useContext } from "react";
import FormContext from "../Context/Context";

const KeyUserData = () => {
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
        <div className="form-group mx-sm-3 mt-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default KeyUserData;
