import React from "react";

const MovieCard = ({ info }) => {
  return (
    <div className="w-40 h-48 m-2 ">
      <img
        className="h-full w-full rounded-md "
        src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`}
        alt={info.backdrop_path}
      ></img>
    </div>
  );
};

export default MovieCard;
