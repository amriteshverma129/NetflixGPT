import { useEffect } from "react";
import {
  TMDB_OPTIONS,
  TOP_RATED_MOVIES_URL,
} from "../utils/variables/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/Slice/movieSlice";

const getMovieList = async (dispatch) => {
  const response = await fetch(TOP_RATED_MOVIES_URL, TMDB_OPTIONS);
  const data = await response.json();
  dispatch(addTopRatedMovies(data.results));
};

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && getMovieList(dispatch);
  }, [dispatch, topRatedMovies]);
};

export default useTopRatedMovies;
