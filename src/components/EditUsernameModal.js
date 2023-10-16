import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { setUserName, editUserName } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const EditUsernameModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState(null);
  const [newUserName, setNewUserName] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const dispatch = useDispatch();

  // Gestion de la soumission du formulaire de modification du nom d'utilisateur
  const handleUsernameSubmit = () => {
    if (newUserName !== "") {
      dispatch(setUserName(newUserName)); // Si un nouveau nom d'utilisateur est saisi, mise à jour le store Redux avec le nouveau nom.
      dispatch(editUserName()); // Lance une action pour effectuer la modification du nom d'utilisateur côté serveur.
      closeModal();
    } else if (newUserName === "") {
      setError("Please fill in all the required fields."); // Si le champ du nouveau nom d'utilisateur est vide, affiche un message d'erreur.
    }
  };

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <dialog open>
            <div className="modal-background">
              <FontAwesomeIcon icon={faUserPen} className="icon" />
              <h1>Edit User infos</h1>
              <form action="" className="modal-form">
                <div className="modal-input-wrapper">
                  <label htmlFor="username">User name:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="modal-input"
                    onChange={(e) => setNewUserName(e.target.value)}
                  />
                </div>{" "}
                <div className="modal-input-wrapper">
                  <label htmlFor="firstName">First name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={firstName}
                    className="modal-input"
                    disabled
                  />
                </div>{" "}
                <div className="modal-input-wrapper ">
                  <label htmlFor="lastName">Last name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="modal-input"
                    placeholder={lastName}
                    disabled
                  />
                </div>
              </form>{" "}
              {error && <p className="error-message">{error}</p>}{" "}
              <div className="modal-button-flex">
                <Button
                  title="Save"
                  className={"transaction-button modal-button"}
                  onClick={handleUsernameSubmit}
                />{" "}
                <Button
                  title="Cancel"
                  className={"transaction-button modal-button"}
                  onClick={closeModal}
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
