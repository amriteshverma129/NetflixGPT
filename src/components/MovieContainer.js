import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const MovieContainer = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movie);

  return (
    <div className="relative w-full h-[900px] bg-black p-5">
      <div className=" w-full absolute" style={{ top: "-150px" }}>
        <MovieList
          movieList={movies.nowPlayingMovies}
          title={"Now Playing Movies"}
        />
        <MovieList movieList={movies.popularMovies} title={"Popular Movies"} />
        <MovieList
          movieList={movies.topRatedMovies}
          title={"Top Rated Movies"}
        />
        <MovieList
          movieList={movies.upcomingMovies}
          title={"Upcoming Movies"}
        />
      </div>
    </div>
  );
};

export default MovieContainer;
