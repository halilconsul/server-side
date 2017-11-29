import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieDescriptionAction from '../actions/MovieDescriptionAction.js';
import MovieDescription from '../components/MovieDescription.jsx';
import currentMovieSelector from '../selectors/selectedMovie.js';

class MovieDescriptionContainer extends React.Component {
  componentWillMount() {
    this.props.MovieDescriptionAction.loadSelectedMovie(this.props.params.movieId);
  }

  componentWillReceiveProps(nextProps) {
      // console.log(nextProps);
    if (this.props.params.movieId !== nextProps.params.movieId) {
        this.props.MovieDescriptionAction.loadSelectedMovie(nextProps.params.movieId);
    }
  }

  componentWillUpdate(nextState, nextProps) {
    console.log(nextProps, nextState);
  }

  render() {
    return (
      <MovieDescription
        selectedMovie={this.props.selectedMovie}
        // error={this.props.err}
      />
    );
  }
}

MovieDescriptionContainer.PropTypes = {
  selectedMovie: React.PropTypes.array,
  MovieDescriptionAction: React.PropTypes.object
}

function mapStateToProps(store) {
  return {
    selectedMovie: currentMovieSelector(store),
    // err: store.moviesList.err
  };
}

function mapDispatchToProps(dispatch) {
  return {
    MovieDescriptionAction: bindActionCreators(MovieDescriptionAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDescriptionContainer);
