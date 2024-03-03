export const NOW_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2";
export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=3";
export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=4";
export const SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=";
export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
  },
};
export const MULTI_LINGUAL_ARR = [
  {
    id: "english-1",
    language: "English",
    lang: "en-US",
  },
  {
    id: "spanish-2",
    language: "Spanish",
    lang: "es-ES",
  },
  {
    id: "chinese-3",
    language: "Chinese",
    lang: "zh-CN",
  },
];
