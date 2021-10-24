import { useContext } from "react";
import FormContext from "../Context/Context";

const Login = ({ state }) => {
  const { loginDataInput, changeLoginDataInput, onSubmitLogin } =
    useContext(FormContext);

  return !state ? (
    <></>
  ) : (
    <>
      <div className="container-sm row">
        <form className="form-inline col-9" onSubmit={onSubmitLogin}>
          <div className="form-group mx-sm-3">
            <label htmlFor="username">Nombre usuario:</label>
            <input
              className="form-control"
              id="username"
              type="text"
              name="username"
              required
              autoComplete="off"
              value={loginDataInput.username}
              onChange={changeLoginDataInput}
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
              value={loginDataInput.password}
              onChange={changeLoginDataInput}
            />
          </div>
          <div className="border rounded border-success mx-sm-3 mt-2">
            <div className="text-center"> {loginDataInput.error} </div>
          </div>
          <div className="align-items-end container d-flex flex-column mt-3">
            <button type="submit" className="btn btn-primary mt-3">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
