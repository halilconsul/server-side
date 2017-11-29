import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import MoviesAction from '../actions/MoviesAction.js';
import MovieDescriptionAction from '../actions/MovieDescriptionAction.js';

import MoviesList from '../components/MoviesList.jsx';

class MoviesListContainer extends React.Component {
  componentWillMount() {
    if (this.props.params.movieId) {
        this.props.MovieDescriptionAction.loadSelectedMovie(this.props.params.movieId);
    }
  }

  handleOptionSelect(option) {
    this.props.MoviesAction.optionSelect(option);
  }

  handleMovieFind(inputText) {
    this.props.MoviesAction.searchMovie({
      movie: inputText,
      option: this.props.option
    });
    this.handleRouterChange(inputText);
  }

  handleRouterChange(inputText) {
    const search = inputText.replace(/ /ig, '%');
    const { router, location } = this.props;
    router.push({
      pathname: `${location.pathname}`,
      query: {...location.query, search}
    });
  }

  handleMovieSelect(movieId) {
    this.props.router.push(`film/${movieId}`);
  }


  render() {
    return (
      <MoviesList
        movies={this.props.movieList}
        handleOptionSelect={this.handleOptionSelect.bind(this)}
        option={this.props.option}
        handleMovieFind={this.handleMovieFind.bind(this)}
        onMovieSelect={this.handleMovieSelect.bind(this)}
        isMovieSelected={this.props.params.movieId}
        children={this.props.children}
        error={this.props.err}
      />
    );
  }
}

MoviesListContainer.propTypes = {
  movieList: React.PropTypes.array,
  option: React.PropTypes.string,
  selectedMovieId: React.PropTypes.string,
  MoviesAction: React.PropTypes.object
};

function mapStateToProps(store) {
  return {
    movieList: store.moviesList.movieList,
    option: store.moviesList.option,
    selectedMovieId: store.movieDescription.selectedMovieId,
    err: store.moviesList.err
  };
}

function mapDispatchToProps(dispatch) {
  return {
    MoviesAction: bindActionCreators(MoviesAction, dispatch),
    MovieDescriptionAction: bindActionCreators(MovieDescriptionAction, dispatch)
  };
}

const wrappedComponent = withRouter(MoviesListContainer);
export default connect(mapStateToProps, mapDispatchToProps)(wrappedComponent);
