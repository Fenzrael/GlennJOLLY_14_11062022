import React, { useState } from "react";
import Header from "../components/Header/Header";
import EmployeesManager from "../components/EmployeesManager/EmployeesManager";
import TableEmployees from "../components/TableEmployees/TableEmployees";
import TableManager from "../components/TableManager/TableManager";
import { useEffect } from "react";

// page des employes
const EmployeesList = () => {
  // States gerant respectivement le nb d'entrees selectionnable(select 10,25,50,100), la page courante, le debut des entrees, la fin des entrees(limite changeant par rapport aux select entries selectionné => €x: page 1 = 10, page2 = 20 ...etc si nb d'entrees selectionnees egal a 10), nombre total d'employes, utilisateurs de la page, la recherche et la props totalOfElements
  const [numberOfEntries, setNumberOfEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentStart, setCurrentStart] = useState(0);
  const [currentEnd, setCurrentEnd] = useState(10);
  const [allEmployes, setAllEmployes] = useState([]);
  const [currentPageEmployesData, setCurrentPageEmployesData] = useState([]);
  const [search, setSearch] = useState();
  const [totalOfElements, setTotalOfElements] = useState(0);

  useEffect(() => {
    // Chargement des données
    const employes =
      JSON.parse(localStorage.getItem("employeesLocalStorage")) ?? [];

    setAllEmployes(employes);
  }, []);

  // useEffects gérant la pagination
  useEffect(() => {
    // Au changement de page
    if (currentPage === 1) {
      setCurrentStart(0);
      setCurrentEnd(numberOfEntries);
    } else {
      // Ex: Page 2 ET 10 entrées par page -> start => (2 - 1) * 10 = 1 * 10 = 10
      const start = (currentPage - 1) * numberOfEntries;

      setCurrentStart(start);
      setCurrentEnd(start + numberOfEntries);
    }
  }, [currentPage]);

  // slice permettant de garder le nombre d'employés par page => currentPageEmployesData stockant cette valeur dans un tableau d'objets comprenant ces utilisateurs et leurs infos
  useEffect(() => {
    const newEmployesData = allEmployes.slice(currentStart, currentEnd);
    setCurrentPageEmployesData(newEmployesData);
  }, [allEmployes, currentStart, currentEnd]);

  // reinitialisation des states currentStart et currentEnd
  useEffect(() => {
    setCurrentStart(0);
    setCurrentEnd(numberOfEntries);
  }, [numberOfEntries]);

  // useEffect gerant la recherche checkant si ce que tape l'utilisateur correspond a des elements de chaque employes
  useEffect(() => {
    let data = allEmployes;

    if (search) {
      data = allEmployes.filter((employe) => {
        if (
          employe.firstName.includes(search) ||
          employe.lastName.includes(search) ||
          employe.dateOfBirth.includes(search) ||
          employe.startDate.includes(search) ||
          employe.department.includes(search) ||
          employe.street.includes(search) ||
          employe.city.includes(search) ||
          employe.state.includes(search) ||
          employe.zipCode.includes(search)
        ) {
          return true;
        }
      });
      setTotalOfElements(data.length);
    } else {
      setTotalOfElements(allEmployes.length);
    }
    data = data.slice(0, numberOfEntries);
    setCurrentPageEmployesData(data);
  }, [search, allEmployes]);

  return (
    <div>
      <Header />
      <EmployeesManager
        setNumberOfEntries={setNumberOfEntries}
        setSearch={setSearch}
      />
      <TableEmployees dataProps={currentPageEmployesData} />
      <TableManager
        totalOfElements={totalOfElements}
        numberOfEntries={numberOfEntries}
        currentStart={currentStart}
        currentEnd={currentEnd}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default EmployeesList;
