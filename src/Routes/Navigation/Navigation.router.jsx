import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchInput from "../../Component/SearchInput/SearchInput.component";
import BookIcon from "../../assets/icon-nav-bookmark.svg";
import HomeIcon from "../../assets/icon-nav-home.svg";
import MovieIcon from "../../assets/icon-nav-movies.svg";
import TvIcon from "../../assets/icon-nav-tv-series.svg";
import ProfilePhoto from "../../assets/image-avatar.png";
import Logo from "../../assets/logo.svg";
import "./Navigation.router.scss";

const Navigation = () => {
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
          <Link className="rootPage__header--menu--item" to="/">
            <img src={HomeIcon} alt="Home Icon" />
          </Link>
          <Link className="rootPage__header--menu--item" to="/movie">
            <img src={MovieIcon} alt="Movie Icon" />
          </Link>
          <Link className="rootPage__header--menu--item" to="/tv">
            <img src={TvIcon} alt="TV Series Icon" />
          </Link>
          <Link className="rootPage__header--menu--item" to="/bookmark">
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
        <SearchInput />
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
