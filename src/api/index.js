import axios from 'axios';
// const ROOT_URL = 'https://netflixroulette.net/api/api.php?';
const API_KEY = 'd0c40024a5aad424f73353d0c7633343';
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query`;

export function loadMovies({ movie, option }) {
  //
  const request = axios.get(`${ROOT_URL}=${movie}`);
  // console.log(request);
  return request;
}
