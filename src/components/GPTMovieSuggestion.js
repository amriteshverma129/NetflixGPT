import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const movieResults = useSelector((store) => store.gpt.gptSearchResults);

  if (!movieResults) return <></>;
  return (
    <div className="overflow-y-scroll h-[500px] bg-black opacity-70 m-5">
      <div className="relative w-full p-10">
        {movieResults.map((movieArray) => {
          return <MovieList movieList={movieArray} title={""} />;
        })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
