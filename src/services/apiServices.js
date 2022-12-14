import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3c99d4331771b454e2f5254e4fb86ae4';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

function getTrendingMovies() {
  return axios('/trending/movie/day').then(res => res.data.results);
}

function getMovieDetales(id) {
  return axios(`/movie/${id}`).then(res => res.data);
}

function searchMovies(query = '') {
  return axios('/search/movie', {
    params: {
      query,
      include_adult: false,
    },
  }).then(res => res.data.results);
}

function getMovieCast(id) {
  return axios(`/movie/${id}/credits`).then(res => res.data);
}

function getMovieReviews(id) {
  return axios(`/movie/${id}/reviews`).then(res => res.data.results);
}

const apiServices = {
  getTrendingMovies,
  getMovieDetales,
  getMovieCast,
  getMovieReviews,
  searchMovies,
};

export default apiServices;