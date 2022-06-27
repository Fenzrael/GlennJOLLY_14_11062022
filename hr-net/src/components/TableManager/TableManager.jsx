import React from "react";
import "./TableManager.css";

const TableManager = () => {
  return (
    <div className="entries">
      <p className="entries__description">Showing 0 to 0 of 0 entries</p>
      <div className="entries__buttons">
        <button className="entries__prev">
          <i className="fa-solid fa-angle-left left"></i> Previous
        </button>
        <button className="entries__count">1</button>
        <button className="entries__next">
          Next <i className="fa-solid fa-angle-right right"></i>
        </button>
      </div>
    </div>
  );
};

export default TableManager;
