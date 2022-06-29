import React from "react";
import Header from "../../components/Header/Header";
import "./Error.css";

// Page d'erreur classique retournant un 404 page not found
const Error = () => {
  return (
    <>
      <Header />
      <div className="error">
        <p className="error__status">404</p>
        <p className="error__description">Page not Found</p>
      </div>
    </>
  );
};

export default Error;
