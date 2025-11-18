import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import movieReducer from "../store/moviesSlice";
import gptReducer from "../store/gptSlice";
import languageReducer from '../store/languageSlice'

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    language:languageReducer
  },
});
