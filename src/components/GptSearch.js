import React from "react";
import GptMovieSearchBar from "./GptMovieSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { Background_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover xl:h-full"
          src={Background_URL}
          alt="Background-image"
        />
      </div>
      <div className="">
        <GptMovieSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
