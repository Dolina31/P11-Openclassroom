import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Account from "../components/Account";
import Button from "../components/Button";
import EditUsernameModal from "../components/EditUsernameModal";

const User = () => {
  const [handleModal, setHandleModal] = useState(false);

  const toggleModal = () => {
    setHandleModal(!handleModal);
  };

  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="page">
      <Navigation />
      <div className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back <br></br>
            {userName}!
          </h1>{" "}
          <Button
            title="Edit name"
            className={"edit-button"}
            onClick={toggleModal}
          />
          {handleModal && <EditUsernameModal onClose={toggleModal} />}
        </div>
        <Account
          title={"Argent Bank Checking "}
          number={8349}
          amount={"$2,082.79"}
        />
        <Account
          title={"Argent Bank savings "}
          number={6712}
          amount={"$10,928.42"}
        />
        <Account
          title={"Argent Bank Credit Card "}
          number={8349}
          amount={"$184.30"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default User;
