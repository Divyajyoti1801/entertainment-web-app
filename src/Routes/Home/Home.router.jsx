import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Component/Cards/Cards.component";
import Spinner from "../../Component/Spinner/Spinner.component";
import Trending from "../../Component/Trending/Trending.component";
import searchIcon from "../../assets/icon-search.svg";
import { fetchTrendingAsync } from "../../store/Trending/trending.action";
import {
  selectIsLoading,
  selectTrending,
} from "../../store/Trending/trending.selector";
import "./Home.router.scss";

const defaultSearchField = {
  search: "",
};

const Home = () => {
  const [searchField, setSearchField] = useState(defaultSearchField);
  const { search } = searchField;
  const dispatch = useDispatch();
  const trending = useSelector(selectTrending);
  console.log(trending);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTrendingAsync());
  }, [dispatch]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSearchField({ ...searchField, [name]: value });
  };

  return (
    <div className="home">
      <div className="home__search">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="home__search--icon"
        />
        <input
          className="home__search--input"
          placeholder="Search for Movies and TV series"
          name="search"
          value={search}
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      <Trending />
      <div className="home__recommendation">
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
