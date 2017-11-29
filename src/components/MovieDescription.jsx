import React from 'react';
import './MovieDescription.scss';

const MovieDescription = ({ selectedMovie, error }) => (
  selectedMovie
  ?
  <div className="MovieDescription">
    <div className="MovieDescription__poster">
      <img src={'https://image.tmdb.org/t/p/w500/' + selectedMovie.poster_path} className="MovieDescription__img"/>
    </div>
    <div className="MovieDescription__info">
      <div className="MovieDescription__container">
        <h2 className="MovieDescription__title">{selectedMovie.title}</h2>
        <p className="MovieDescription__rating">{selectedMovie.vote_average}</p>
      </div>
      <div className="MovieDescription__container">
        <p className="MovieDescription__num">{selectedMovie.release_date}</p>
        <p className="MovieDescription__num">{selectedMovie.vote_count}</p>
      </div>
      <div className="MovieDescription__summary">{selectedMovie.overview}</div>
      <div className="MovieDescription__stuff">
        <span className="MovieDescription__person">Director</span>: <span className="MovieDescription__person">{selectedMovie.popularity}</span>
      </div>
      <div className="MovieDescription__stuff">
        <span className="MovieDescription__person">Cast</span>: <span className="MovieDescription__person">cast</span>
      </div>
    </div>
  </div>
  :
  <div className="MovieDescription">
    <div className="MovieDescription__error">
      Oops, the movie cannot be found!
    </div>
  </div>
);

MovieDescription.propTypes = {
  selectedMovie: React.PropTypes.object
};

export default MovieDescription;
