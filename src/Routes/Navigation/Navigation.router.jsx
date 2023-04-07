import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BookIcon from "../../assets/icon-nav-bookmark.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import MovieIcon from "../../assets/icon-nav-movies.svg";
import TvIcon from "../../assets/icon-nav-tv-series.svg";
import searchIcon from "../../assets/icon-search.svg";
import ProfilePhoto from "../../assets/image-avatar.png";
import Logo from "../../assets/logo.svg";
import "./Navigation.router.scss";

const defaultSearchField = {
  search: "",
};

const Navigation = () => {
  const [searchField, setSearchField] = useState(defaultSearchField);
  const { search } = searchField;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSearchField({ ...searchField, [name]: value });
  };

  return (
    <div className="rootPage">
      <header className="rootPage__header">
        <div className="rootPage___header--logo">
          <img
            className="rootPage___header--logo--img"
            src={Logo}
            alt="Entertainment App Logo"
          />
        </div>
        <div className="rootPage__header--menu">
          <Link className="rootPage__header--menu--item">
            <img src={HomeIcon} alt="Home Icon" />
          </Link>
          <Link className="rootPage__header--menu--item">
            <img src={MovieIcon} alt="Movie Icon" />
          </Link>
          <Link className="rootPage__header--menu--item">
            <img src={TvIcon} alt="TV Series Icon" />
          </Link>
          <Link className="rootPage__header--menu--item">
            <img src={BookIcon} alt="Book Icon" />
          </Link>
        </div>
        <Link className="rootPage__header--profile" to="auth">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="rootPage__header--profile--png"
          />
        </Link>
      </header>
      <div className="rootPage__body">
        <div className="rootPage__body--search">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="rootPage__body--search--icon"
          />
          <input
            className="rootPage__body--search--input"
            placeholder="Search for Movies and TV series"
            name="search"
            value={search}
            onChange={onChangeHandler}
            autoComplete="off"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
