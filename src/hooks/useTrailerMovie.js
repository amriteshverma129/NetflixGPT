import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const getMovieTrailer = async (dispatch, movie_id) => {
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

const useTrailerMovie = (movie_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie_id) return;
    getMovieTrailer(dispatch, movie_id);
  }, [movie_id, dispatch]);
};

export default useTrailerMovie;
