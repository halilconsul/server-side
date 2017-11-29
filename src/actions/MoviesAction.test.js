import expect from 'expect';
import MoviesAction from './MoviesAction.js';
import AppConstants from '../constants/AppConstants.js';

describe('MoviesAction', () => {
  describe('optionSelect', () => {
    it('should create OPTION_SELECT_FULFILLED action', () => {
      const option = { option : 'option'};
      const expectedAction = {
        type: AppConstants.OPTION_SELECT_FULFILLED,
        payload: option
      };
      const action = MoviesAction.optionSelect(option);
      expect(action).toEqual(expectedAction);
    });
  });
});
