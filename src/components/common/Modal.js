import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
