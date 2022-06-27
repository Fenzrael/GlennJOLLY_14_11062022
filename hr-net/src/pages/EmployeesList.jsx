import React, { useState } from "react";
import Header from "../components/Header/Header";
import EmployeesManager from "../components/EmployeesManager/EmployeesManager";
import TableEmployees from "../components/TableEmployees/TableEmployees";
import TableManager from "../components/TableManager/TableManager";

const EmployeesList = () => {
  const [numberOfEntries, setNumberOfEntries] = useState(10);
  const [search, setSearch] = useState();
  return (
    <div>
      <Header />
      <EmployeesManager
        numberOfEntries={numberOfEntries}
        setNumberOfEntries={setNumberOfEntries}
      />
      <TableEmployees
        numberOfEntries={numberOfEntries}
        setNumberOfEntries={setNumberOfEntries}
      />
      <TableManager />
    </div>
  );
};

export default EmployeesList;
