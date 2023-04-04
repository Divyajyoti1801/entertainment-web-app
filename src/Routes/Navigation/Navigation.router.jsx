import React from "react";
import { Link, Outlet } from "react-router-dom";
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
      <header className="header">
        <div className="header__logo">
          <img
            className="header__logo--img"
            src={Logo}
            alt="Entertainment App Logo"
          />
        </div>
        <div className="header__menu">
          <Link className="header__menu--item">
            <img src={HomeIcon} alt="Home Icon" />
          </Link>
          <Link className="header__menu--item">
            <img src={MovieIcon} alt="Movie Icon" />
          </Link>
          <Link className="header__menu--item">
            <img src={TvIcon} alt="TV Series Icon" />
          </Link>
          <Link className="header__menu--item">
            <img src={BookIcon} alt="Book Icon" />
          </Link>
        </div>
        <Link className="header__profile" to="auth">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="header__profile--png"
          />
        </Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
