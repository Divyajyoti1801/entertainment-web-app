import TRENDING_ACTION_TYPES from "./trending.type";

const INITIAL_STATE = {
  trending: [],
  isLoading: false,
  error: null,
};

export const trendingReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case TRENDING_ACTION_TYPES.FETCH_TRENDING_START:
      return { ...state, isLoading: true };
    case TRENDING_ACTION_TYPES.FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trending: payload,
      };
    case TRENDING_ACTION_TYPES.FETCH_TRENDING_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
