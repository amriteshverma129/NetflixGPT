import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    gptSearchResults: null,
  },
  reducers: {
    addGPTSearchResults: (state, action) => {
      state.gptSearchResults = action.payload;
    },
  },
});

export const { addGPTSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
