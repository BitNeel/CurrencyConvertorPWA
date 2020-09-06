import React from "react";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 text-primary">Teller</span>
      </nav>
      <form>
        <div class="form-group row">
          <label for="amountInput" class="col-sm-2 mb-2 col-form-label">
            amount
          </label>
          <div class="col-sm-5">
            <input
              type="number"
              class="form-control"
              id="amountInput"
              placeholder="amount"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="fromCountry" class="col-sm-2 mb-2 col-form-label">
            from country
          </label>
          <div class="col-sm-5">
            <input
              type="text"
              class="form-control"
              id="fromCountry"
              placeholder="from country"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="toCountry" class="col-sm-2 col-form-label">
            to country
          </label>
          <div class="col-sm-5">
            <input
              type="text"
              class="form-control"
              id="toCountry"
              placeholder="to country"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
