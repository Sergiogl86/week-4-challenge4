const PersonalData = () => {
  return (
    <div class="container-sm">
      <form class="form-inline">
        <div className="form-group mx-sm-3">
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="form-control"
            id="nombre"
            type="text"
            name="nombre"
            required
            autocomplete="off"
          />
        </div>
        <div className="form-group mx-sm-3">
          <label htmlFor="lastName">Apellidos:</label>
          <input
            className="form-control"
            id="lastName"
            type="text"
            name="lastName"
            required
            autocomplete="off"
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
            autocomplete="off"
          />
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
            autocomplete="off"
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

export default PersonalData;
