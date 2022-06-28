import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, handleValidate, text }) => {
  return ( isOpen &&
    <div className="container">
      <div className="container__backgroundOpacity">
        <div
          className="container__modal"
          role="dialog"
          aria-describedby="dialogDescription"
        >
          <p>sdsqdsqdsqds</p>
          <button
            className="container__buttonClose buttonClose"
            onClick={onClose}
          >
            <i className="fa-solid fa-circle-xmark buttonClose__Icon"></i>
          </button>
          <p id="dialogDescription">{text}</p>
          <button onClick={() => handleValidate()}>Validate</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
