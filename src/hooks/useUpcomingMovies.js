import { useEffect } from "react";
import { TMDB_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const response = await fetch(UPCOMING_MOVIES_URL, TMDB_OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useUpcomingMovies;