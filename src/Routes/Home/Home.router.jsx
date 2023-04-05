import React, { useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import "./Home.router.scss";

const defaultSearchField = {
  search: "",
};

const Home = () => {
  const [searchField, setSearchField] = useState(defaultSearchField);
  const { search } = searchField;

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
    </div>
  );
};

export default Home;
