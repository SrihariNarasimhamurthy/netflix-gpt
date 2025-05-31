import React from "react";
import GptMovieSearchBar from "./GptMovieSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { Background_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={Background_URL} alt="Background-image" />
      </div>
      <GptMovieSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
