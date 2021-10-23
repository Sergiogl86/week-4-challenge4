import { useContext } from "react";
import Boton from "../Boton/Boton";
import FormContext from "../Context/Context";
import CalcularEdad from "./../CalcularEdad/CalcularEdad";

const PersonalData = ({ state }) => {
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

  return !state ? (
    <></>
  ) : (
    <>
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
        <div className="container row p-0">
          <div className="col-10">
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
          <div className="col-2 border rounded border-success align-self-center">
            {<CalcularEdad fecha={personalDataInput.birthdate} />}
          </div>
        </div>
      </div>

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
      <div className="align-items-end container d-flex flex-column mt-3">
        <Boton
          text={"Siguiente"}
          state={true}
          actionOnClick={() => console.log("Boton")}
        />
      </div>
    </>
  );
};

export default PersonalData;
