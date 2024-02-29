import React from "react";
import Header from "./Header";
import MovieContainer from "./MovieContainer";
import TrailerContainer from "./TrailerContainer";

const Browser = () => {
  return (
    <div className="relative">
      <Header />
      <TrailerContainer />
      <MovieContainer />
    </div>
  );
};

export default Browser;
