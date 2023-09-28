import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
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

export const userProfileData = createAsyncThunk(
  "user/userProfileData",
  async (_, { getState }) => {
    const { token } = getState().user;
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

export const editUserName = createAsyncThunk(
  "user/editUserName",
  async (_, { getState }) => {
    const { userName, token } = getState().user;
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
