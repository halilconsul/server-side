import AppConstants from '../constants/AppConstants.js';
import { loadMovies } from '../api/index.js';

const MoviesAction = {
  optionSelect(option) {
    return {
      type: AppConstants.OPTION_SELECT_FULFILLED,
      payload: option
    }
  },

  searchMovie(params) {
    const request = loadMovies({
      movie: params.movie.replace(/ /ig, '+'),
      option: params.option
    });
    return {
      type: AppConstants.SEARCH_MOVIE,
      payload: request
    }
  }
}

export default MoviesAction;
