import React, { useState } from "react";
import departments from "../../mockedDatas/departments.json";
import states from "../../mockedDatas/states.json";
/* import { useRef } from "react"; */
import "./FormCreationEmployee.css";

const FormCreationEmployee = () => {
  // State permettant d'initialiser a false(faux) pour l'utiliser afin d'ouvrir modal(react-plugin-modal)
  /* const [isOpenModal, setIsOpenModal] = useState(false); */

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [department, setDepartment] = useState(
    // Valeur par defaut du select department() mise afin de pouvoir capturer cette valeur si l'utilisateur ne la change pas
    departments?.departments?.[0]?.value
  );
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState(states?.states?.[0]?.value);
  const [zipCode, setZipCode] = useState();

  // getItem: Recupere les donnees tapees par l'utilisateur dans le localStorage (1)
  const employeesLocalStorage =
    JSON.parse(localStorage.getItem("employeesLocalStorage")) || [];

  // Fonction qui reset le formulaire
  const clearForm = () => {
    const htmlTag = document.querySelector(".container__form");
    htmlTag.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataEmployeeCreation = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };
    /* console.log(dataEmployeeCreation); */

    // (1-suite) grace au push de l'objet dataEmployeeCreation
    employeesLocalStorage.push(dataEmployeeCreation);

    // setItem: Ajoute le duo cle-valeur a l'emplacement de stockage sinon met a jour la valeur si la cle existe deja
    localStorage.setItem(
      "employeesLocalStorage",
      JSON.stringify(employeesLocalStorage)
    );
    clearForm();
  };

  return (
    <div className="container">
      <h2 className="container__title">Create Employee</h2>
      <form
        action="#"
        id="create__employee"
        className="container__form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="container__input">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="birthDate">Date of Birth</label>
          <input
            id="birthDate"
            type="date"
            required
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            required
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            required
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            required
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            onChange={(e) => setState(e.target.value)}
          >
            {states.states.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.value}
                </option>
              );
            })}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            required
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <div className="container__select">
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.departments.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.label}
                </option>
              );
            })}
          </select>
        </div>
        <button className="container__button">Save</button>
      </form>
    </div>
  );
};

export default FormCreationEmployee;
