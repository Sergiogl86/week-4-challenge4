import { useContext } from "react";
import FormContext from "../Context/Context";
import CalcularEdad from "./../CalcularEdad/CalcularEdad";

const PersonalData = () => {
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
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="form-control"
            id="name"
            type="text"
            name="nombre"
            required
            autoComplete="off"
            value={personalDataInput.name}
            onChange={changePersonalData}
          />
        </div>
        <div className="form-group mx-sm-3">
          <label htmlFor="lastName">Apellidos:</label>
          <input
            className="form-control"
            id="lastname"
            type="text"
            name="lastName"
            required
            autoComplete="off"
            value={personalDataInput.lastname}
            onChange={changePersonalData}
          />
        </div>
        <div className="form-group mx-sm-3">
          <label htmlFor="birthdate">Cumpleaños:</label>
          <input
            className="form-control"
            id="birthdate"
            type="date"
            name="birthdate"
            required
            autoComplete="off"
            value={personalDataInput.birthdate}
            onChange={changePersonalData}
          />
        </div>
        <div>{<CalcularEdad fecha={personalDataInput.birthdate} />}</div>
        <div className="form-group mx-sm-3">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            pattern="[^ @]*@[^ @]*"
            placeholder="Enter your email"
            required
            autoComplete="off"
            value={personalDataInput.email}
            onChange={changePersonalData}
          />
        </div>
        <div className="form-group mx-sm-3 mt-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
      <pre style={{ textAlign: "left" }}>
        <div>{JSON.stringify(personalDataInput)}</div>
      </pre>
    </div>
  );
};

export default PersonalData;
