import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";

const Login = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="main bg-dark">
        <SignInForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
