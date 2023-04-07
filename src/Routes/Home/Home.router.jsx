import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Component/Cards/Cards.component";
import Spinner from "../../Component/Spinner/Spinner.component";
import Trending from "../../Component/Trending/Trending.component";
import { fetchTrendingAsync } from "../../store/Trending/trending.action";
import {
  selectIsLoading,
  selectTrending,
} from "../../store/Trending/trending.selector";
import "./Home.router.scss";

const Home = () => {
  const dispatch = useDispatch();
  const trending = useSelector(selectTrending);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTrendingAsync());
  }, [dispatch]);

  return (
    <div className="home">
      <h1 className="home__trending-header">Trending</h1>
      <Trending />
      <div className="home__recommendation">
        <h1 className="home__recommendation--header">Recommended for you</h1>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="home__recommendation--content">
            {trending.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
