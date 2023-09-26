import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Account from "../components/Account";
import Button from "../components/Button";
import EditNameModal from "../components/EditNameModal";

const User = () => {
  const [handleModal, setHandleModal] = useState(false);

  const toggleModal = () => {
    setHandleModal(!handleModal);
  };

  return (
    <div className="page">
      <Navigation />
      <div className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back <br></br> Tony Jarvis!
          </h1>{" "}
          <Button
            title="Edit Name"
            className={"edit-button"}
            onClick={toggleModal}
          />
          {handleModal && <EditNameModal onClose={toggleModal} />}
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
