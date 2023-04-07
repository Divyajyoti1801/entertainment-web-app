import MOVIES_ACTION_TYPES from "./movies.type";

const INITIAL_STATE = {
  movies: [],
  isMovieLoading: false,
  error: null,
};

export const moviesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_START:
      return { ...state, isMovieLoading: true };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS:
      return { ...state, isMovieLoading: false, movies: payload };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED:
      return { ...state, isMovieLoading: false, error: payload };
    default:
      return state;
  }
};
