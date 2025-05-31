import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptMovieSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-40 flex justify-center">
      <form className=" bg-gray-950 w-1/2 grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="py-3 px-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-blue-500 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptMovieSearchBar;
