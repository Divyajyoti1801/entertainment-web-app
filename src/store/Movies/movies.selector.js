import { createSelector } from "reselect";

const selectMoviesReducer = (state) => state.movies;

export const selectMovies = createSelector(
  [selectMoviesReducer],
  (moviesData) => moviesData.movies
);

export const selectIsMovieLoading = createSelector(
  [selectMoviesReducer],
  (moviesData) => moviesData.isMovieLoading
);
