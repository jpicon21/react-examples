import React from "react";

const Modal = ({open, title, children, onClose}) => {

  return(
    <>
      {open ?
        <div className="modal" id="modal">
          <h2>{title}</h2>
          <div class="content">{children}</div>
          <div class="actions">
            <button class="toggle-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div> : ""
      }
    </>
  )
}

export default Modal;