import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectTrending,
} from "../../store/Trending/trending.selector";
import Spinner from "../Spinner/Spinner.component";
import TrendingCard from "../TrendingCard/TrendingCard.component";
import "./Trending.component.scss";

const Trending = () => {
  const trending = useSelector(selectTrending);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="trending-container">
      {isLoading ? (
        <Spinner className="trending-container__spinner" />
      ) : (
        <div className="trending">
          {trending.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
          {trending.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
