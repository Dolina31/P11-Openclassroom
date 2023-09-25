import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../features/userSlice";

const Navigation = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(setToken(null));
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt=""
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {token ? (
        <div className="main-nav-item-position">
          <NavLink className="main-nav-item" to="/">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            Tony
          </NavLink>
          <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
