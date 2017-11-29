import React from 'react';
import './Movie.scss';

const Movie = ({ onMovieSelect, poster, title, releaseYear, category }) => (
  <div className="Movie" onClick={onMovieSelect}>
    <div className="Movie__poster">
      <img src={poster} className="Movie__img" />
    </div>
    <div className="Movie__info">
      <div className="Movie__title">
        <div className="Movie__text">{title}</div>
        <div className="Movie__releaseYear">{releaseYear}</div>
      </div>
      <div className="Movie__category">{category}</div>
    </div>
  </div>
);

Movie.propTypes = {
  onMovieSelect: React.PropTypes.func,
  poster: React.PropTypes.string,
  title: React.PropTypes.string,
  releaseYear: React.PropTypes.string,
  category: React.PropTypes.string
};

export default Movie;
