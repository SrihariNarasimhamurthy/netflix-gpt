import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.gptMovies = action.payload;
    },
    addGptMovieNames: (state, action) => {
      state.gptMovieNames = action.payload;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult, addGptMovieNames } =
  gptSlice.actions;
export default gptSlice.reducer;
