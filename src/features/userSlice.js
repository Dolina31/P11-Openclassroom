import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
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

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
