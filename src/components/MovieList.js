import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className=" text-1xl md:text-2xl py-4 font-bold text-white">
        {title}
      </h1>
      <div
        className="flex overflow-x-scroll"
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE/Edge
        }}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
