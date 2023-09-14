import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // Changez l'importation ici

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
