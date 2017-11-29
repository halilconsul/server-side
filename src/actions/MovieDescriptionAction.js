import AppConstants from '../constants/AppConstants.js';

const MovieDescriptionAction = {
  loadSelectedMovie(movieId) {
    console.log(movieId);
    return {
      type: AppConstants.LOAD_SELECTED_MOVIE_FULFILLED,
      payload: movieId
    }
  }
};

export default MovieDescriptionAction;
