import React from "react";
import { useDispatch, useSelector } from "react-redux";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import {
  AddBookmark,
  RemoveBookmark,
} from "../../store/Bookmark/bookmark.action";
import { selectBookmarks } from "../../store/Bookmark/bookmark.selector";
import "./TrendingCard.component.scss";
const TrendingCard = ({ item }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(selectBookmarks);

  const {
    media_type,
    release_date,
    title,
    adult,
    name,
    backdrop_path,
    first_air_date,
  } = item;

  const isBookmarked = bookmarks.includes(item);

  const onClickHandler = () => {
    if (isBookmarked) {
      return dispatch(RemoveBookmark(bookmarks, item));
    }
    return dispatch(AddBookmark(bookmarks, item));
  };

  const year = new Date(release_date).getFullYear();
  const tvYear = new Date(first_air_date).getFullYear();
  const backImage = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <div
      className="trending-card"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="trending-card__bookmark">
        <span className="trending-card__bookmark--img" onClick={onClickHandler}>
          <img
            src={isBookmarked ? bookmarkFull : bookmarkEmpty}
            alt={isBookmarked ? "Bookmark Full" : "Bookmark Empty"}
          />
        </span>
      </div>
      <div className="trending-card__details">
        <h2 className="trending-card__details--title">
          {year ? `${year}` : `${tvYear}`}&nbsp;&#8226;&nbsp;
          <img src={media_type === "movie" ? Movie : Tv} alt="Movie" />
          &nbsp;
          {media_type === "movie" ? `Movie` : `Tv Series`}
          &nbsp;&#8226; &nbsp;{adult ? `A` : `PG`}
        </h2>
        <h1 className="trending-card__details--heading">
          {title ? `${title}` : `${name}`}
        </h1>
      </div>
    </div>
  );
};

export default TrendingCard;
