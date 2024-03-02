import { useEffect } from "react";
import { NOW_MOVIES_URL, TMDB_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const getMovieList = async () => {
    const response = await fetch(NOW_MOVIES_URL, TMDB_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getMovieList();
  }, []);
};

export default useNowPlayingMovies;
