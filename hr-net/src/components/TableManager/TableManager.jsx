import React from "react";
import "./TableManager.css";

// Props initialisee a employeesList.jsx grace au states referents
const TableManager = ({
  totalOfElements,
  currentStart,
  currentEnd,
  numberOfEntries,
  setCurrentPage,
  currentPage,
}) => {
  // Variable plafond grace a la methode math.ceil de js (retourne le plus petit entier superieur ou egal au nombre donne) prenant la props totalOfElements divisee par la props numberOfEntries
  const numberOfPages = Math.ceil(totalOfElements / numberOfEntries);

  // Variable controlant l'affichage dynamique du nombre d'elements affiches sur la page par rapport au nombre d'entrees
  const endOfElements =
    currentEnd > totalOfElements ? totalOfElements : currentEnd;

  // Variable initialiseé a un tableau vide remplit grace a la boucle for stockant le nombre de pages
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
          /* Au clic si currentPage(nombre de pages presentes) inferieure ou egal a 1 , onClick retourne rien, autrement on fait currentPage - 1 => retour arriere*/
          onClick={() => {
            if (currentPage <= 1) return;
            setCurrentPage(currentPage - 1);
            console.log(currentPage);
          }}
        >
          <i className="fa-solid fa-angle-left left"></i> Previous
        </button>
        {paginationButtons}
        <button
          className="entries__next"
          /* Au clic, inversement a entries__prev si currentPage(nombre de pages presentes) superieur ou egal au nombre de pages , onClick retourne rien, autrement on fait currentPage + 1 => page suivante*/
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
