import React from "react";

const MovieCard = ({ info }) => {
  //   const obj = {
  //     backdrop_path: "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
  //     genre_ids: (3)[(28, 53, 10752)],
  //        popularity: 2089.144,
  //     poster_path: "/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",

  //   };
  {
    /* <h1>{info.original_title}</h1>
      <span>{info.overview}</span>
      <span>{info.release_date}</span>
      <span>Vote: {info.vote_average}</span>
      <span>VoteCount: {info.vote_count}</span> */
  }
  return (
    <div className="w-40 h-48 m-2 ">
      <img
        className="h-full w-full rounded-md "
        src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`}
      ></img>
    </div>
  );
};

export default MovieCard;
