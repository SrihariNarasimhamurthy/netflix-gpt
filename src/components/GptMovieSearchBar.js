import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openAI";
import { API_Options } from "../utils/constants";
import {
  addGptMovieResult,
  addGptMovieNames,
  setLoading,
} from "../utils/gptSlice";

const GptMovieSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const fetchGptMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    dispatch(setLoading(true));
    const gptQuery =
      "Act as a movie recommendation system and suggest the movies for the query : " +
      searchText.current.value +
      "and make sure to give only 8 movie names with comma separated like for example Razz,booth nak, farzi";

    try {
      const response = await window.puter.ai.chat(gptQuery);

      const gptMovieList = response?.message?.content.split(",");
      const promiseArray = gptMovieList.map((movie) => fetchGptMovies(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieNames(gptMovieList));
      dispatch(addGptMovieResult(tmdbResults));
    } catch (error) {
      console.error("Error:", error);
    }
    dispatch(setLoading(false));
  };
  return (
    <div className="pt-[55%] md:pt-40 flex justify-center">
      <form
        className="w-[95%] bg-gray-950 md:w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="py-3  text-xs md:text-sm   px-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-3 px-8 m-4 bg-blue-500 text-xs md:text-sm flex justify-center text-white rounded-lg md:col-span-3"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptMovieSearchBar;
