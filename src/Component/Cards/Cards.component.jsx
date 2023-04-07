import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookMarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookMarkFull from "../../assets/icon-bookmark-full.svg";
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import {
  addItemToBookmark,
  removeItemFromBookmark,
  toggleBookmark,
} from "../../store/Bookmark/bookmark.action";
import { selectBookmarkItem } from "../../store/Bookmark/bookmark.selector";

import "./Cards.component.scss";

const Cards = ({ item }) => {
  const [bookmark, setBookmark] = useState(false);
  const bookmarkItems = useSelector(selectBookmarkItem);
  const dispatch = useDispatch();
  const onClickHandler = () => setBookmark(!bookmark);
  if (bookmark) {
    dispatch(addItemToBookmark(bookmarkItems, item));
  }

  const {
    media_type,
    release_date,
    title,
    adult,
    backdrop_path,
    poster_path,
    name,
    id,
    first_air_date,
  } = item;
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
            src={bookmark ? BookMarkFull : BookMarkEmpty}
            alt={bookmark ? "Bookmark Full" : "Bookmark Empty"}
            onClick={onClickHandler}
          />
        </span>
      </div>
      <div className="cards__details">
        <h2 className="cards__details--title">
          {year ? `${year}` : `${tvYear ? `${tvYear}` : `Yet to release`}`}
          &nbsp;&#8226;&nbsp;
          <img src={media_type === "movie" ? Movie : Tv} alt="Movie" />
          &nbsp;
          {media_type === "movie" ? `Movie` : `Tv Series`}
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
