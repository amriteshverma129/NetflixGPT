import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const movieResults = useSelector((store) => store.gpt.gptSearchResults);

  if (!movieResults) return <></>;
  return (
    <div className="relative w-full p-10">
      {movieResults.map((movieArray) => {
        return (
          <MovieList movieList={movieArray} title={"Now Playing Movies"} />
        );
      })}
    </div>
  );
};

export default GPTMovieSuggestion;
