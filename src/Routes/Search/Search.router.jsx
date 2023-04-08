import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Cards from "../../Component/Cards/Cards.component";
import Spinner from "../../Component/Spinner/Spinner.component";
import {
  selectIsLoading,
  selectSearchData,
  selectSearchInput,
} from "../../store/Search/search.selector";
import "./Search.router.scss";

const Search = () => {
  const searchInput = useSelector(selectSearchInput);
  const search = useSelector(selectSearchData);
  const isSearchLoading = useSelector(selectIsLoading);
  return (
    <div className="search-result">
      {search ? (
        <h1 className="search-result__heading">
          Found {search.length} for "{searchInput}"
        </h1>
      ) : (
        <Fragment></Fragment>
      )}
      {isSearchLoading ? (
        <Spinner />
      ) : (
        <div className="search-result__content">
          {search
            .filter(
              (item) =>
                item.media_type !== "person" || item.release_date === null
            )
            .map((item) => (
              <Cards key={item.id} item={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
