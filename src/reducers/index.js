import { combineReducers } from 'redux';
import MoviesListReducer from './MoviesListReducer.js';
import MovieDescriptionReducer from './MovieDescriptionReducer.js';

const rootReducer = combineReducers({
  moviesList: MoviesListReducer,
  movieDescription: MovieDescriptionReducer
});

export default rootReducer;
