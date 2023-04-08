import SEARCH_ACTION_TYPES from "./search.type";

const INITIAL_STATE = {
  searchInput: "",
  search: [],
  isSearchLoading: false,
  error: null,
};

export const searchReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ACTION_TYPES.SEARCH_INPUT:
      return { ...state, searchInput: payload, isSearchLoading: false };
    case SEARCH_ACTION_TYPES.FETCH_SEARCH_DATA_START:
      return {
        ...state,
        isSearchLoading: true,
      };
    case SEARCH_ACTION_TYPES.FETCH_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isSearchLoading: false,
        search: payload,
      };
    case SEARCH_ACTION_TYPES.FETCH_SEARCH_DATA_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
