import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookMarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookMarkFull from "../../assets/icon-bookmark-full.svg";
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import {
  AddBookmark,
  RemoveBookmark,
} from "../../store/Bookmark/bookmark.action";
import { selectBookmarks } from "../../store/Bookmark/bookmark.selector";

import "./Cards.component.scss";

const Cards = ({ item }) => {
  const bookmarks = useSelector(selectBookmarks);
  const {
    release_date,
    title,
    adult,
    backdrop_path,
    poster_path,
    name,
    first_air_date,
  } = item;
  const isBookmarked = bookmarks.includes(item);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (isBookmarked) {
      return dispatch(RemoveBookmark(bookmarks, item));
    }
    return dispatch(AddBookmark(bookmarks, item));
  };

  const year = new Date(release_date).getFullYear();
  const tvYear = new Date(first_air_date).getFullYear();
  const backImage = `https://image.tmdb.org/t/p/w500${
    backdrop_path ? `${backdrop_path}` : `${poster_path}`
  }`;
  return (
    <div className="cards">
      <div className="cards__banner">
        <img
          src={backImage}
          alt={title ? `${title}` : `${name}`}
          className="cards__banner--img"
        />
        <span className="cards__banner--icon">
          <img
            src={isBookmarked ? BookMarkFull : BookMarkEmpty}
            alt={isBookmarked ? "Bookmark Full" : "Bookmark Empty"}
            onClick={onClickHandler}
          />
        </span>
      </div>
      <div className="cards__details">
        <h2 className="cards__details--title">
          {year ? `${year}` : `${tvYear ? `${tvYear}` : `Yet to release`}`}
          &nbsp;&#8226;&nbsp;
          <img src={title ? Movie : Tv} alt="Movie" />
          &nbsp;
          {title ? `Movie` : `Tv Series`}
          &nbsp; &#8226; &nbsp;{adult ? `18+` : `PG`}
        </h2>
        <h1 className="cards__details--heading">
          {title ? `${title}` : `${name}`}
        </h1>
      </div>
    </div>
  );
};

export default Cards;
