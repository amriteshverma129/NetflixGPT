export const TMDB_API_KEY = "eb3d21c0791eda1b210662627ce2a846";
export const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjNkMjFjMDc5MWVkYTFiMjEwNjYyNjI3Y2UyYTg0NiIsInN1YiI6IjY1ZGY1YjgwOThmMWYxMDE2NDk5MzRhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYWVRsVrmP7aHavlHKnO1rnNwbQP2mwByEkNHOVFInA";
export const NOW_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2";
export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=3";
export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=4";

export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};
