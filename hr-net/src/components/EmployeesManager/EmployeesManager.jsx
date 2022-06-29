import React from "react";
import "./EmployeesManager.css";

// props setSearch(recherche), setNumberOfEntries(nombre d'entrees) relies a employeesList.jsx
const EmployeesManager = ({ setSearch, setNumberOfEntries }) => {
  return (
    <div className="wrapper">
      <h2 className="wrapper__title">Current Employees</h2>
      <section className="wrapper__input">
        <div className="wrapper__entries">
          Show<label htmlFor="wrapper__employeesTableLength"></label>
          <select
            name="wrapper__employeesTableLength"
            id="wrapper__employeesTableLength"
            aria-controls="employeesTableLength"
            /* Au changement on capture la donnee selectionne par l'utilisateur dans le state numberOfEntries*/
            onChange={(e) => setNumberOfEntries(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          Entries
        </div>
        <div className="wrapper__search">
          <label htmlFor="wrapper__employeesTableFilter"></label>
          <p>
            Search:
            <input
              type="search"
              /* Au changement on capture la donnee selectionne par l'utilisateur dans le state search*/
              onChange={(e) => setSearch(e.target.value)}
              aria-controls="employeesTableFilter"
              id="wrapper__employeesTableFilter"
            />
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmployeesManager;
