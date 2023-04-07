import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Component/Cards/Cards.component";
import { fetchMoviesAsync } from "../../store/Movies/movies.action";
import {
  selectIsMovieLoading,
  selectMovies,
} from "../../store/Movies/movies.selector";
import "./Movies.router.scss";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const isMovieLoading = useSelector(selectIsMovieLoading);
  console.log(movies);
  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  return <div>Movies</div>;
};

export default Movies;
