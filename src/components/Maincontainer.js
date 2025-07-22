import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies == null) return; //->early retun
  const filteredMovies = movies.filter(
    (movie) => movie.original_title === "Superman"
  );
  console.log(movies);
  // console.log(filteredMovies);
  const mainMovie = movies[3];
  if (!mainMovie) return null;
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={id} />
    </div>
  );
};

export default Maincontainer;
