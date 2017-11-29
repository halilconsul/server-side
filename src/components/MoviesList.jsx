import React from 'react';
import Movie from '../components/Movie.jsx';
import MovieDescription from './MovieDescription.jsx';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router';
import './MoviesList.scss';

class MoviesList extends React.Component {
  renderMovie(movie) {
    return (
      <Movie
        key={movie.id}
        poster={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
        releaseYear={movie.release_date}
        category={movie.original_language}
        title={movie.title}
        onMovieSelect={this.props.onMovieSelect.bind(null, movie.id)}
      />
    );
  }

  renderReturnButton(isMovieSelected) {
    if (isMovieSelected) {
      return (
        <div className="MovieList__return">
          <Link to='/search' className="MovieList__link">Back to Search</Link>
        </div>
      );
    } else {
      return;
    }
  }

  renderHeader() {
    return (
      <div className="MoviesList__container">
         <div className="MovieList__header">
           <h1 className="MoviesList__title">netflixroulette</h1>
           { this.renderReturnButton(this.props.isMovieSelected) }

         </div>

        {
          this.props.isMovieSelected
          ?
            <div className="MoviesList__children">{this.props.children}</div>
          :
            <SearchBar
              onOptionSelect={this.props.handleOptionSelect}
              onMovieFind={this.props.handleMovieFind}
              option={this.props.option}
            />
        }
      </div>
    );
  }

  renderMoviesList(error) {
    if (error) {
      return <div className="MovieList__error">No Movies Found</div>;
    } else {
        return this.props.movies.map(movie => this.renderMovie(movie));
    }
  }

  renderFooter() {
    return (
      <div className="MoviesList__container">
        <h2 className="MovieList__title">netflixroulette</h2>
      </div>
    );
  }

  render() {
    return (
      <div className="MoviesList">
        <div className="MoviesList__header">
          { this.renderHeader() }
        </div>
        <div className="MoviesList__movies">
          {this.renderMoviesList(this.props.error)}
        </div>
        <div className="MoviesList__footer">
          { this.renderFooter() }
        </div>
      </div>
    );
  }
}

MoviesList.PropTypes = {
	onMovieSelect: React.PropTypes.func,
	isMovieSelected: React.PropTypes.string,
	handleOptionSelect: React.PropTypes.func,
	handleMovieFind: React.PropTypes.func,
	option: React.PropTypes.string,
	movies: React.PropTypes.array
};

export default MoviesList;
