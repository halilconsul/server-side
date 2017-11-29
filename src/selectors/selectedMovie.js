import { createSelector } from 'reselect';

const moviesList = store => store.moviesList.movieList;
const selectedMovieId = store => store.movieDescription.selectedMovieId;

const getCurrentMovie = (movieLists, movieId) => {
  const currentMovie = movieLists.filter(movie => movie.id == movieId);
  return currentMovie[0];
}

export default createSelector(
  moviesList,
  selectedMovieId,
  getCurrentMovie
);
