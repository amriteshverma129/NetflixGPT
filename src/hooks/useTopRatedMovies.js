import { useEffect } from "react";
import { TMDB_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

  const getMovieList = async () => {
    const response = await fetch(TOP_RATED_MOVIES_URL, TMDB_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getMovieList();
  }, []);
};

export default useTopRatedMovies;
