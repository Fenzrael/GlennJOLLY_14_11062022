import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, text }) => {
  return (
    <div className="container">
      <div className="container__backgroundOpacity">
        <div
          className="container__modal"
          role="dialog"
          aria-describedby="dialogDescription"
        >
          <button
            className="container__buttonClose buttonClose"
            onClick={isOpen}
          >
            <i className="fa-solid fa-circle-xmark buttonClose__Icon"></i>
          </button>
          <p id="dialogDescription">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
