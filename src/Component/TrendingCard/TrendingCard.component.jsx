import React from "react";
import BookMarkEmpty from "../../assets/icon-bookmark-empty.svg";
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import "./TrendingCard.component.scss";

const TrendingCard = ({ item }) => {
  const { media_type, release_date, title, adult, backdrop_path } = item;
  const year = new Date(release_date).getFullYear();
  const backImage = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <div
      className="trending-card"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="trending-card__bookmark">
        <span className="trending-card__bookmark--img">
          <img src={BookMarkEmpty} alt="BookMark Empty" />
        </span>
      </div>
      <div className="trending-card__details">
        <h2 className="trending-card__details--title">
          {year}&nbsp;&#8226;&nbsp;
          <img src={media_type === "movie" ? Movie : Tv} alt="Movie" />
          &nbsp;
          {media_type === "movie" ? `Movie` : `Tv Series`}
          &nbsp;&#8226; &nbsp;{adult ? `A` : `PG`}
        </h2>
        <h1 className="trending-card__details--heading">{title}</h1>
      </div>
    </div>
  );
};

export default TrendingCard;
