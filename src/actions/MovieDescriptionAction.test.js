import expect from 'expect';
import MovieDescriptionAction from './MovieDescriptionAction.js';
import AppConstants from '../constants/AppConstants.js';

describe('MovieDescriptionAction', () => {
  describe('loadSelectedMovie', () => {
    it('should create LOAD_SELECTED_MOVIE_FULFILLED action', () => {
      const movieId = { movieId : 'movieId'};
      const expectedAction = {
        type: AppConstants.LOAD_SELECTED_MOVIE_FULFILLED,
        payload: movieId
      };
      const action = MovieDescriptionAction.loadSelectedMovie(movieId);
      expect(action).toEqual(expectedAction);
    });
  });
});
