import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faXmark } from "@fortawesome/free-solid-svg-icons";

const EditNameModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <dialog open>
            <FontAwesomeIcon
              icon={faXmark}
              className="modal-exit-button"
              onClick={closeModal}
            />
            <div className="modal-background">
              <FontAwesomeIcon icon={faUserPen} className="icon" />
              <h1>Edit Your Name</h1>
              <form action="" className="modal-form">
                <div className="input-wrapper">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="modal-input"
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="modal-input"
                  />
                </div>
              </form>{" "}
              <div className="modal-button-flex">
                <Button title="Confirm" className={"transaction-button"} />
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};
export default EditNameModal;
