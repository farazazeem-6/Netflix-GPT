import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGpt: false,
  },
  reducers: {
    addGptToggle: (state) => {
      state.isGpt = !state.isGpt;
    },
  },
});

export const { addGptToggle } = gptSlice.actions;
export default gptSlice.reducer;
