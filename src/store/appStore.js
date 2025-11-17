import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import  movieReducer  from "../store/moviesSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
