import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Component/Cards/Cards.component";
import Spinner from "../../Component/Spinner/Spinner.component";
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
  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  return (
    <div className="movies">
      <h1 className="movies__heading">Movies</h1>
      {isMovieLoading ? (
        <Spinner />
      ) : (
        <div className="movies__content">
          {movies.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
