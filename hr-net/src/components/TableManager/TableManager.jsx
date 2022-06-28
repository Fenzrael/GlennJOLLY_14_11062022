import React from "react";
import "./TableManager.css";

const TableManager = ({
  totalOfElements,
  currentStart,
  currentEnd,
  numberOfEntries,
  setCurrentPage,
  currentPage,
}) => {
  const numberOfPages = Math.ceil(totalOfElements / numberOfEntries);
  const endOfElements =
    currentEnd > totalOfElements ? totalOfElements : currentEnd;

  const paginationButtons = [];

  for (let i = 1; i <= numberOfPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className="entries__count"
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="entries">
      <p className="entries__description">
        Showing {currentStart + 1} to {endOfElements} of {totalOfElements}{" "}
        entries
      </p>
      <div className="entries__buttons">
        <button
          className="entries__prev"
          onClick={() => {
            if (currentPage <= 1) return;
            setCurrentPage(currentPage - 1);
          }}
        >
          <i className="fa-solid fa-angle-left left"></i> Previous
        </button>
        {paginationButtons}
        <button
          className="entries__next"
          onClick={() => {
            if (currentPage >= numberOfPages) return;
            setCurrentPage(currentPage + 1);
          }}
        >
          Next <i className="fa-solid fa-angle-right right"></i>
        </button>
      </div>
    </div>
  );
};

export default TableManager;
