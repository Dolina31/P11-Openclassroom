import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || "", // récupération du token depuis le localStorage s'il est présent, sinon initialisation avec une chaîne vide.
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

// requête de connexion
export const userLoginRequest = createAsyncThunk(
  "user/userLogin",
  async (formData) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  }
);

// requête récupération données utilisateur
export const userProfileData = createAsyncThunk(
  "user/userProfileData",
  async (_, { getState }) => {
    const { token } = getState().user; // récupération du token dans le store
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const userProfileData = await response.json();

    return userProfileData;
  }
);

// requête changement dun nom de l'utilisateur
export const editUserName = createAsyncThunk(
  "user/editUserName",
  async (_, { getState }) => {
    const { userName, token } = getState().user; // récupération de nom utilisateur et du token
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    });

    const editUserName = await response.json();

    return editUserName;
  }
);

export const { setToken, setFirstName, setLastName, setUserName } =
  userSlice.actions;
export default userSlice.reducer;
