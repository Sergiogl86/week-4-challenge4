import { useContext } from "react";
import FormContext from "../Context/Context";

const Ficha = ({ state }) => {
  const { personalDataInput } = useContext(FormContext);
  return !state ? (
    <></>
  ) : (
    <div className="container-sm row mt-5">
      <div className="card col-9">
        <div className="card-header">Datos del usuario:</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Nombre de usuario: ${personalDataInput.username}`}</li>
          <li className="list-group-item">{`Nombre: ${personalDataInput.name}`}</li>
          <li className="list-group-item">{`Apellidos: ${personalDataInput.lastname}`}</li>
          <li className="list-group-item">{`Cumpleaños: ${personalDataInput.birthdate}`}</li>
          <li className="list-group-item">{`Email: ${personalDataInput.email}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Ficha;
