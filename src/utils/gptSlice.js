import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieNames: null,
    isLoading: false,
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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  toggleGptSearch,
  addGptMovieResult,
  addGptMovieNames,
  setLoading,
} = gptSlice.actions;
export default gptSlice.reducer;
