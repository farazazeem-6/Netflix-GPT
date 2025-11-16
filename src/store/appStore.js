import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
