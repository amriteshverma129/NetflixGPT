import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchIcon from "../icons/SearchIcon";
import openai from "../utils/openAI";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { SEARCH_MOVIE_URL, TMDB_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGPTSearchResults } from "../utils/gptSlice";

const GPTSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchResults();
  };

  const searchTMDBMovies = async (movieName) => {
    const response = await fetch(SEARCH_MOVIE_URL + movieName, TMDB_OPTIONS);
    const data = await response.json();
    return data.results;
  };

  const searchResults = async () => {
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              "Act as Movie Recommendation system and suggest some movies for the query :" +
              searchQuery +
              ".only give me name of atmost 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Panchayat, Luck, Namaste London, wanted",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const movieNameArray =
        chatCompletion.choices[0]?.message?.content?.split(",");
      const promiseArray = movieNameArray.map((movieName) =>
        searchTMDBMovies(movieName)
      );
      const moviesResults = await Promise.all(promiseArray);
      dispatch(addGPTSearchResults(moviesResults));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="h-[100vh] w-[100vw] relative">
        <img
          src="/images/Netflex-Background-Img.jpeg"
          alt="Background image"
          className="h-full w-full"
        />
        <div className="inset-0 absolute bg-black bg-opacity-50 justify-center flex items-center flex-col ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="p-4 w-[600px] bg-black rounded-md "
          >
            <div className="flex w-full relative ">
              <input
                type="search"
                className="flex-1 border-slate-400 border-2 rounded-l-md p-2 outline-none "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="py-3 px-4 rounded-r-md bg-red-600 text-white font-semibold text-xl items-center"
              >
                <SearchIcon color={"white"} />
              </button>
            </div>
          </form>
          <GPTMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
