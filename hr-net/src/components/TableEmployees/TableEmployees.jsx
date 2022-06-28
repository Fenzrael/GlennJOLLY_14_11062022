import React from "react";
import "./TableEmployees.css";
import theads from "../../mockedDatas/tableTheadInfos.json";
import { useState, useEffect } from "react";

const TableEmployees = ({ dataProps }) => {
  // State pour fonction affichage conditionnel des icones de tri
  const [orderProperty, setOrderProperty] = useState(null);
  const [order, setOrder] = useState("");
  const [data, setData] = useState([]);

  // fonction affichage conditionnel des icones de tri
  const onClickOrder = (propertyName) => {
    setOrderProperty(propertyName);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    setData(dataProps);
  }, [dataProps]);

  useEffect(() => {
    if (null === orderProperty) return;

    const newData = [...data];

    newData.sort(function(a, b) {
      if ("asc" === order) {
        if (a[orderProperty] > b[orderProperty]) {
          return 1;
        }
        if (a[orderProperty] < b[orderProperty]) {
          return -1;
        }
        return 0;
      } else {
        if (a[orderProperty] > b[orderProperty]) {
          return -1;
        }
        if (a[orderProperty] < b[orderProperty]) {
          return 1;
        }
        return 0;
      }
    });

    setData(newData)
  }, [orderProperty, order])

  return (
    <section className="wrapper__table table">
      <table
        id="table__employees"
        role="grid"
        aria-describedby="tableEmployees__info"
      >
        <thead className="table__header">
          <tr role="row" className="table__row">
            {/* Affichage des theads(titres de colonnes) avec un map */}
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
                  onClick={() => onClickOrder(el.propertyName)}
                >
                  {el.value}
                  {orderProperty === el.propertyName ? (
                    order === "desc" ? (
                      <i className="fa-solid fa-sort-up table__icon"></i>
                    ) : (
                      <i className="fa-solid fa-sort-down table__icon"></i>
                    )
                  ) : (
                    <i className="fa-solid fa-sort table__icon"></i>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <>
            {/* Affichage des differents employes repartis grace aux tr/td */}
            {data?.length >= 1 ? (
              data.map((el, index) => {
                return (
                  <tr className="table__odd odd" key={index}>
                    <td className="table__td" data-label="First Name">
                      {el.firstName}
                    </td>
                    <td className="table__td" data-label="Last Name">
                      {el.lastName}
                    </td>
                    <td className="table__td" data-label="Start Date">
                      {el.startDate}
                    </td>
                    <td className="table__td" data-label="Department">
                      {el.department}
                    </td>
                    <td className="table__td" data-label="Date of Birth">
                      {el.dateOfBirth}
                    </td>
                    <td className="table__td" data-label="Street">
                      {el.street}
                    </td>
                    <td className="table__td" data-label="City">
                      {el.city}
                    </td>
                    <td className="table__td" data-label="State">
                      {el.state}
                    </td>
                    <td className="table__td" data-label="Zip Code">
                      {el.zipCode}
                    </td>
                  </tr>
                );
              })
            ) : (
              /* Valeur td si zero employes enregistrer dans le localstorage */
              <tr className="table__odd odd">
                <td colSpan="9" className="odd__empty">
                  No datas available in table
                </td>
              </tr>
            )}
          </>
        </tbody>
      </table>
    </section>
  );
};

export default TableEmployees;
