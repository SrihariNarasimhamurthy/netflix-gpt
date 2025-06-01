import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVedio = useSelector((store) => store.movies.trailerVedio);

  const getMovieVedios = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();

    const filteredTrailor = json.results.filter(
      (vedio) => vedio.type == "Trailer"
    );
    const trailor = filteredTrailor.length
      ? filteredTrailor[0]
      : json.results[0];

    dispatch(addTrailerVedio(trailor));
  };

  useEffect(() => {
    !trailerVedio && getMovieVedios();
  }, []);
};

export default useMovieTrailer;
