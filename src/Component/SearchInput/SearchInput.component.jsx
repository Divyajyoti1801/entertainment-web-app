import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/icon-search.svg";
import {
  fetchSearchAsync,
  setSearchInput,
} from "../../store/Search/search.action";
import { selectSearchInput } from "../../store/Search/search.selector";
import "./SearchInput.component.scss";

const SearchInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);

  const onChangeHandler = (e) => dispatch(setSearchInput(e.target.value));

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchSearchAsync(searchInput));
      navigate("/search");
    }
  };

  return (
    <div className="search">
      <img src={searchIcon} alt="Search Icon" className="search__icon" />
      <input
        className="search__input"
        placeholder="Search for Movies and TV series"
        name="search"
        value={searchInput}
        onChange={onChangeHandler}
        onKeyDownCapture={onKeyPressHandler}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchInput;
