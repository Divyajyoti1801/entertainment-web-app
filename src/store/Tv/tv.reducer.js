import TV_ACTION_TYPES from "./tv.type";

const INITIAL_STATE = {
  series: [],
  isSeriesLoading: false,
  error: null,
};

export const tvReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TV_ACTION_TYPES.FETCH_TV_START:
      return { ...state, isSeriesLoading: true };
    case TV_ACTION_TYPES.FETCH_TV_SUCCESS:
      return { ...state, isSeriesLoading: false, series: payload };
    case TV_ACTION_TYPES.FETCH_TV_FAILED:
      return { ...state, isSeriesLoading: false, error: payload };
    default:
      return state;
  }
};
