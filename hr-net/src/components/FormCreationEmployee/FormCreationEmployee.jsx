import React, { useState } from "react";
import departments from "../../mockedDatas/departments.json";
import states from "../../mockedDatas/states.json";
import { useRef } from "react";
import "./FormCreationEmployee.css";

const FormCreationEmployee = () => {
  // State permettant d'initialiser a false(faux) pour l'utiliser afin d'ouvrir modal(react-plugin-modal)
  /* const [isOpenModal, setIsOpenModal] = useState(false);
  const openingModal = () => setIsOpenModal(true);
  const closingModal = () => setIsOpenModal(false); */

  // Recuperation des donnees tapees ou selectionees par l'utilisateur avec le hook useRef
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputBirthDate = useRef();
  const inputStartDate = useRef();
  const selectDepartment = useRef();
  const inputStreet = useRef();
  const inputCity = useRef();
  const selectState = useRef();
  const inputZipCode = useRef();
  const formRef = useRef();

  // Creation d'un objet avec les donnees tapees ou selectionees par l'utilisateur
  const dataEmployeeCreation = {
    firstName: inputFirstName?.current?.value,
    lastName: inputLastName?.current?.value,
    dateOfBirth: inputBirthDate?.current?.value,
    startDate: inputStartDate?.current?.value,
    department: selectDepartment?.current?.value,
    street: inputStreet?.current?.value,
    city: inputCity?.current?.value,
    state: selectState?.current?.value,
    zipCode: inputZipCode?.current?.value,
  };

  /* console.log(dataEmployeeCreation); */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataEmployeeCreation);
  };

  return (
    <div className="container">
      <h2 className="container__title">Create Employee</h2>
      <form
        action="#"
        id="create__employee"
        className="container__form"
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="container__input">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" ref={inputFirstName} />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" ref={inputLastName} />

          <label htmlFor="birthDate">Date of Birth</label>
          <input id="birthDate" type="text" ref={inputBirthDate} />

          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="text" ref={inputStartDate} />
        </div>
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" ref={inputStreet} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" ref={inputCity} />

          <label htmlFor="state">State</label>
          <select name="state" id="state" ref={selectState}>
            {states.states.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.value}
                </option>
              );
            })}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="number" ref={inputZipCode} />
        </fieldset>

        <div className="container__select">
          <label htmlFor="department">Department</label>
          <select name="department" id="department" ref={selectDepartment}>
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
