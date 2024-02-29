import { useEffect } from "react";
import { TMDB_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const response = await fetch(TOP_RATED_MOVIES_URL, TMDB_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useTopRatedMovies;
