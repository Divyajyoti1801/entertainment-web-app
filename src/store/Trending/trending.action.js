import { getTrending } from "../../utils/TMDBApi/TMDBApi";
import { createAction } from "../../utils/reducer/reducer.utils";
import TRENDING_ACTION_TYPES from "./trending.type";

export const fetchTrendingStart = () =>
  createAction(TRENDING_ACTION_TYPES.FETCH_TRENDING_START);

export const fetchTrendingSuccess = (trending) =>
  createAction(TRENDING_ACTION_TYPES.FETCH_TRENDING_SUCCESS, trending);

export const fetchTrendingFailed = (error) =>
  createAction(TRENDING_ACTION_TYPES.FETCH_TRENDING_FAILED, error);

export const fetchTrendingAsync = () => {
  return async (dispatch) => {
    dispatch(fetchTrendingStart());
    try {
      const trending = await getTrending();
      dispatch(fetchTrendingSuccess(trending));
    } catch (error) {
      dispatch(fetchTrendingFailed(error));
    }
  };
};
