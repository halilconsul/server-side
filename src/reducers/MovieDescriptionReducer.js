import AppConstants from '../constants/AppConstants.js';

const initialState = {
  selectedMovieId: ''
};

export default function(state=initialState, action) {
  switch (action.type) {
    case AppConstants.LOAD_SELECTED_MOVIE_FULFILLED: {
      return {
        ...state,
        selectedMovieId: action.payload
      }
    }
      break;
  }
  return state;
}
