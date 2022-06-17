import React from "react";
import "./FormCreationEmployee.css";

const FormCreationEmployee = () => {
  return (
    <div className="container">
      <h2 className="container__title">Create Employee</h2>
      <form action="#" id="create__employee" className="container__form">
        <div className="container__input">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />

          <label htmlFor="birthDate">Date of Birth</label>
          <input id="birthDate" type="text" />

          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="text" />
        </div>
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="number" />
        </fieldset>

        <div className="container__select">
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </form>

      <button className="container__button">Save</button>
    </div>
  );
};

export default FormCreationEmployee;
