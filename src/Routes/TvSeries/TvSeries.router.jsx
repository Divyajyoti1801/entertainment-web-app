import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvAsync } from "../../store/Tv/tv.action";
import {
  selectIsSeriesLoading,
  selectTvSeries,
} from "../../store/Tv/tv.selector";
import "./TvSeries.router.scss";

const TvSeries = () => {
  const dispatch = useDispatch();
  const series = useSelector(selectTvSeries);
  const isSeriesLoading = useSelector(selectIsSeriesLoading);
  console.log(series);
  useEffect(() => {
    dispatch(fetchTvAsync());
  }, [dispatch]);

  return <div>TvSeries</div>;
};

export default TvSeries;
