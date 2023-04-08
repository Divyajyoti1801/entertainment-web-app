export const getTrending = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((data) => data.json())
    .then(({ results }) => results);
  return data;
};

export const getMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=free`
  )
    .then((data) => data.json())
    .then(({ results }) => results);
  return data;
};

export const getTvSeries = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=free&with_status=0&with_type=0`
  )
    .then((data) => data.json())
    .then(({ results }) => results);
  return data;
};

export const getSearch = async (query) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`
  )
    .then((data) => data.json())
    .then(({ results }) => results);
  return data;
};
