import React from "react";
import TrailerIframe from "./TrailerIframe";
import TrailerTilte from "./TrailerTilte";
import useTrailerMovie from "../hooks/useTrailerMovie";
import { useSelector } from "react-redux";

const TrailerContainer = () => {
  const movieList = useSelector((store) => store.movie.nowPlayingMovies);
  const firstMovie = movieList?.[0];
  useTrailerMovie(firstMovie?.id);
  const trailer = useSelector((store) => store.movie.trailer);

  console.log("trialerContainer", trailer);
  return (
    <div className="w-full h-[800px] relative">
      <TrailerTilte trailerInfo={firstMovie} />
      <TrailerIframe videoId={trailer?.key} />
    </div>
  );
};

export default TrailerContainer;
