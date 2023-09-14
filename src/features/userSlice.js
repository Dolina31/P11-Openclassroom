import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    token: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const userLogin = createAsyncThunk(
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

export const { setEmail, setPassword } = userSlice.actions;
export const selectIsUserLoggedIn = (state) => !!state.user.token;
export default userSlice.reducer;
