import React from "react";
import "./Modal.css";

// props gerant l'ouverture, la fermeture, la validation et le texte descriptif de la modale
const Modal = ({ isOpen, onClose, handleValidate, text }) => {
  return (
    isOpen && (
      <div className="container">
        <div className="container__backgroundOpacity">
          <div
            className="container__modal"
            role="dialog"
            aria-describedby="dialogDescription"
          >
            <p className="container__presentation">Employee Created</p>
            <button
              className="container__buttonClose buttonClose"
              /* Au clic utilisation de la props onClose reliees au formulaire */
              onClick={onClose}
            >
              <i className="fa-solid fa-circle-xmark fa-xl buttonClose__Icon"></i>
            </button>
            <p id="dialogDescription">{text}</p>
            <button
              className="container__validate"
              /* Au clic utilisation de la fonction handleValidate presente dans le fichier du formulaire */
              onClick={() => handleValidate()}
            >
              Validate
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
