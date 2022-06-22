import React from "react";
import "./TableEmployees.css";
import theads from "../../mockedDatas/tableTheadInfos.json";
import { useState } from "react";
import "./TableEmployees.css";

const TableEmployees = (props) => {
  const [icon, setIcon] = useState(false);
  const { employeesTd } = props;
  return (
    <section className="wrapper__table table">
      <table
        id="table__employees"
        role="grid"
        aria-describedby="tableEmployees__info"
      >
        <thead className="table__header">
          <tr role="row" className="table__row">
            {theads.th.map((el) => {
              return (
                <th
                  className="sorting"
                  key={el.id}
                  aria-sort="ascending"
                  tabIndex="0"
                  aria-controls="employee__table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label={`${el.value}: activate to sort column ascending.`}
                  onClick={() => setIcon(true)}
                >
                  {el.value}
                  <i className="fa-solid fa-sort table__icon"></i>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/*  {employeesTd.map((el) => (
            <tr key={el.id} className="table__odd">
              {}
            </tr>
          ))} */}
        </tbody>
      </table>
    </section>
  );
};

export default TableEmployees;
