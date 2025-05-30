import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return; //->early retun
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId={id} />
    </div>
  );
};

export default Maincontainer;
