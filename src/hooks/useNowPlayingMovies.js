import { useEffect } from "react";
import { NOW_MOVIES_URL, TMDB_OPTIONS } from "../utils/variables/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/Slice/movieSlice";

const getMovieList = async (dispatch) => {
  const response = await fetch(NOW_MOVIES_URL, TMDB_OPTIONS);
  const data = await response.json();
  dispatch(addNowPlayingMovies(data.results));
};

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  useEffect(() => {
    !nowPlayingMovies && getMovieList(dispatch);
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayingMovies;
