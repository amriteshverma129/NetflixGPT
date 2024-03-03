import { useEffect } from "react";
import { POPULAR_MOVIES_URL, TMDB_OPTIONS } from "../utils/variables/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/Slice/movieSlice";

const getMovieList = async (dispatch) => {
  const response = await fetch(POPULAR_MOVIES_URL, TMDB_OPTIONS);
  const data = await response.json();
  dispatch(addPopularMovies(data.results));
};

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie.popularMovies);

  useEffect(() => {
    !popularMovies && getMovieList(dispatch);
  }, [dispatch, popularMovies]);
};

export default usePopularMovies;
