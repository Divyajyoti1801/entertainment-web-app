import { getSearch } from "../../utils/TMDBApi/TMDBApi";
import { createAction } from "../../utils/reducer/reducer.utils";
import SEARCH_ACTION_TYPES from "./search.type";

export const setSearchInput = (input) =>
  createAction(SEARCH_ACTION_TYPES.SEARCH_INPUT, input);

export const fetchSearchStart = () =>
  createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_DATA_START);

export const fetchSearchSuccess = (search) =>
  createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_DATA_SUCCESS, search);

export const fetchSearchFailed = (error) =>
  createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_DATA_FAILED, error);

export const fetchSearchAsync = (input) => {
  return async (dispatch) => {
    dispatch(fetchSearchStart);
    try {
      const search = await getSearch(input);
      dispatch(fetchSearchSuccess(search));
    } catch (error) {
      dispatch(fetchSearchFailed(error));
    }
  };
};
