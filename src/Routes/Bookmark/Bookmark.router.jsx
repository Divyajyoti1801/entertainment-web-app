import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Component/Cards/Cards.component";
import { selectBookmarks } from "../../store/Bookmark/bookmark.selector";
import "./Bookmark.router.scss";

const Bookmark = () => {
  const bookmarks = useSelector(selectBookmarks);
  return (
    <div className="bookmark">
      <h1 className="bookmark__movies-heading">Bookmarked Movies</h1>
      <div className="bookmark__movies">
        {bookmarks
          .filter((item) => !item.first_air_date && item.release_date !== null)
          .map((item) => (
            <Cards key={item.id} item={item} />
          ))}
      </div>
      <h1 className="bookmark__series-heading">Bookmarked Tv Series</h1>
      <div className="bookmark__series">
        {bookmarks
          .filter((item) => !item.release_date && item.first_air_date !== null)
          .map((item) => (
            <Cards key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Bookmark;
