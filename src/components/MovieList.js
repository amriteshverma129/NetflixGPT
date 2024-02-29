import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList, title }) => {
  return (
    <div className="w-full">
      <div className="text-white font-bold text-[30px]">{title}</div>
      <div className="flex   overflow-x-scroll">
        <div className="flex">
          {movieList?.map((movie) => {
            return (
              <React.Fragment key={movie.id}>
                <MovieCard info={movie} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
