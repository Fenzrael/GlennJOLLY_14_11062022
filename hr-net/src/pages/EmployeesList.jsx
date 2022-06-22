import React from "react";
import Header from "../components/Header/Header";
import EmployeesManager from "../components/EmployeesManager/EmployeesManager";
import TableEmployees from "../components/TableEmployees/TableEmployees";

const EmployeesList = () => {
  return (
    <div>
      <Header />
      <EmployeesManager />
      <TableEmployees />
    </div>
  );
};

export default EmployeesList;
