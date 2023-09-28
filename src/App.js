import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { useDispatch, useSelector } from "react-redux";
import {
  setToken,
  userProfileData,
  setFirstName,
  setLastName,
  setUserName,
} from "./features/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      dispatch(setToken(storedToken));
      dispatch(userProfileData());
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(userProfileData()).then((resultAction) => {
        const { firstName, lastName, userName } = resultAction.payload.body;
        dispatch(setFirstName(firstName));
        dispatch(setLastName(lastName));
        dispatch(setUserName(userName));
      });
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
