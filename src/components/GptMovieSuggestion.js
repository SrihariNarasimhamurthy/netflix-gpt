import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./shimmer";

const GptMovieSuggestion = () => {
  const { gptMovies, gptMovieNames, isLoading } = useSelector(
    (store) => store.gpt
  );
  if (isLoading) return <Shimmer />;
  if (!gptMovieNames || !gptMovies || gptMovieNames.length !== gptMovies.length)
    return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-50">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
