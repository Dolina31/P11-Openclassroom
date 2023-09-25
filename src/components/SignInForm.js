import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setToken, userLogin } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    const res = await dispatch(userLogin(formData));
    const resData = res.payload;

    const token = resData.body.token;

    dispatch(setToken(token));

    if (!token) {
      navigate("/user");
    } else {
      console.log(
        "Erreur d'authentification : le token est manquant ou invalide"
      );
    }
  };
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" id="remember-me" />
        </div>
        <button className="sign-in-button" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
