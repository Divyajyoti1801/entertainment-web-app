import { getTvSeries } from "../../utils/TMDBApi/TMDBApi";
import { createAction } from "../../utils/reducer/reducer.utils";
import TV_ACTION_TYPES from "./tv.type";

export const fetchTvStart = () => createAction(TV_ACTION_TYPES.FETCH_TV_START);

export const fetchTvSuccess = (series) =>
  createAction(TV_ACTION_TYPES.FETCH_TV_SUCCESS, series);

export const fetchTvFailed = (error) =>
  createAction(TV_ACTION_TYPES.FETCH_TV_FAILED, error);

export const fetchTvAsync = () => {
  return async (dispatch) => {
    dispatch(fetchTvStart());
    try {
      const series = await getTvSeries();
      dispatch(fetchTvSuccess(series));
    } catch (error) {
      dispatch(fetchTvFailed(error));
    }
  };
};
