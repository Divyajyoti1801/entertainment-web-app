import { getMovies } from "../../utils/TMDBApi/TMDBApi";
import { createAction } from "../../utils/reducer/reducer.utils";
import MOVIES_ACTION_TYPES from "./movies.type";

export const fetchMoviesStart = () =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_START);

export const fetchMoviesSuccess = (movies) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS, movies);

export const fetchMoviesFailed = (error) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED, error);

export const fetchMoviesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesStart());
    try {
      const movies = await getMovies();
      dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchMoviesFailed(error));
    }
  };
};
