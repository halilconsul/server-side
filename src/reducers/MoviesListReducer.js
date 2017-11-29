import AppConstants from '../constants/AppConstants.js';

const initialState = {
  movieList: [],
  option: 'title',
  err: false
};

function getErrorMessageByCode(code) {
  const errorMessages = {
    400: 'Cannot load movies'
  };
  return errorMessages[code] || 'Something bad happened';
}

export default function(state=initialState, action) {
  switch (action.type) {
    case AppConstants.OPTION_SELECT_FULFILLED: {
      return {
        ...state,
        option: action.payload
      }
    }
      break;

    case 'SEARCH_MOVIE_FULFILLED': {
      const movies = action.payload.data.results;
      if (movies.length > 1) {
        return {
          ...state,
          movieList: movies,
          err: false
        }
      } else {
        const allMovies = [];
        allMovies.push(movies);
        return {
          ...state,
          movieList: allMovies,
          err: false
        }
      }
    }
      break;

    case 'SEARCH_MOVIE_REJECTED':
      return {
        ...state,
        err: true
      }
      break;
  }

  return state;
}
