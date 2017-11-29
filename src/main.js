import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store/index.js';
import App from './App.jsx';
import MoviesList from './containers/MoviesList.jsx';
import MovieDescription from './containers/MovieDescription.jsx';
import './styles/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MoviesList} />
        <Route path='/search' component={MoviesList}>
          <Route path='/film/:movieId' component={MovieDescription} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount-point')
);
