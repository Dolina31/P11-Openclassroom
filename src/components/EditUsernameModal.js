import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { setUserName, editUserName } from "../features/userSlice";
import { useDispatch } from "react-redux";

const EditUsernameModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [newUserName, setNewUserName] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const dispatch = useDispatch();

  const handleUsernameSubmit = () => {
    if (newUserName !== "") {
      dispatch(setUserName(newUserName));
      dispatch(editUserName());
      closeModal();
    } else {
      console.log("Please entrer a new username");
    }
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
              <h1>Edit Your Username</h1>
              <form action="" className="modal-form">
                <div className="input-wrapper">
                  <label htmlFor="username">New Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="modal-input"
                    onChange={(e) => setNewUserName(e.target.value)}
                  />
                </div>
              </form>{" "}
              <div className="modal-button-flex">
                <Button
                  title="Confirm"
                  className={"transaction-button"}
                  onClick={handleUsernameSubmit}
                />
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default EditUsernameModal;
