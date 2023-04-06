import React from "react";
import BookMarkEmpty from "../../assets/icon-bookmark-empty.svg";
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import "./Cards.component.scss";

const Cards = ({ item }) => {
  const {
    media_type,
    release_date,
    title,
    adult,
    backdrop_path,
    name,
    first_air_date,
  } = item;
  const year = new Date(release_date).getFullYear();
  const tvYear = new Date(first_air_date).getFullYear();
  const backImage = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <div className="cards">
      <div className="cards__banner">
        <img src={backImage} alt={`${title}`} className="cards__banner--img" />
        <span className="cards__banner--icon">
          <img src={BookMarkEmpty} alt="BookMark Empty" />
        </span>
      </div>
      <div className="cards__details">
        <h2 className="cards__details--title">
          {year ? `${year}` : `${tvYear}`}&nbsp;&#8226;&nbsp;
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
