const KeyUserData = () => {
  return (
    <div class="container-sm">
      <form class="form-inline">
        <div className="form-group mx-sm-3">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            id="username"
            type="text"
            name="username"
            required
            autocomplete="off"
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

export default KeyUserData;
