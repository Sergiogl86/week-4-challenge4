const Ficha = ({ state }) => {
  return !state ? (
    <></>
  ) : (
    <div className="container-sm row">
      <div className="card col-9">
        <div className="card-header">Usuario</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nombre</li>
          <li className="list-group-item">Apellidos</li>
          <li className="list-group-item">Cumpleaños</li>
          <li className="list-group-item">Email</li>
        </ul>
      </div>
    </div>
  );
};

export default Ficha;
