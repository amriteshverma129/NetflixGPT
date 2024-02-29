import { useEffect } from "react";
import { POPULAR_MOVIES_URL, TMDB_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const response = await fetch(POPULAR_MOVIES_URL, TMDB_OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default usePopularMovies;
