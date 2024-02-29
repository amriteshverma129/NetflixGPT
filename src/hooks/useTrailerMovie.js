import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useTrailerMovie = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      TMDB_OPTIONS
    );
    const data = await response.json();
    const trailerList = data.results;
    const trailerFilter = trailerList?.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const trailer = trailerFilter[0] || trailerList[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    if (!movie_id) return;
    getMovieTrailer();
  }, [movie_id]);
};

export default useTrailerMovie;
