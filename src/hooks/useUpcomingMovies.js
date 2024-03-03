import { useEffect } from "react";
import { TMDB_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/variables/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/Slice/movieSlice";

const getMovieList = async (dispatch) => {
  const response = await fetch(UPCOMING_MOVIES_URL, TMDB_OPTIONS);
  const data = await response.json();
  dispatch(addUpcomingMovies(data.results));
};

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && getMovieList(dispatch);
  }, [dispatch, upcomingMovies]);
};

export default useUpcomingMovies;
