import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Component/Cards/Cards.component";
import Spinner from "../../Component/Spinner/Spinner.component";
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

  useEffect(() => {
    dispatch(fetchTvAsync());
  }, [dispatch]);

  return (
    <div className="series">
      <h1 className="series__heading">Tv Series</h1>
      {isSeriesLoading ? (
        <Spinner />
      ) : (
        <div className="series__content">
          {series.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TvSeries;
