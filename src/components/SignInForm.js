import React, { useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setToken, userLoginRequest } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMeisChecked, setRememberMeisChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    const res = await dispatch(userLoginRequest(formData));
    const resData = res.payload;
    const token = resData.body.token;

    dispatch(setToken(token));

    if (token && rememberMeisChecked) {
      navigate("/user");
      localStorage.setItem("token", token);
    } else if (token && !rememberMeisChecked) {
      navigate("/user");
    } else {
      console.log();
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
          <input
            type="checkbox"
            id="remember-me"
            onChange={() => setRememberMeisChecked(!rememberMeisChecked)}
          />
        </div>
        <Button
          title="Sign In"
          className={"sign-in-button"}
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};

export default SignInForm;
