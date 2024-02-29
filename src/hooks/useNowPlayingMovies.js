import { useEffect } from "react";
import { NOW_MOVIES_URL, TMDB_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const response = await fetch(NOW_MOVIES_URL, TMDB_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useNowPlayingMovies;
