const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '04333487fae6801ae7461c72fe9ea316';

const fetchWithErrorHandling = async (url = '', config = {}) => {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
};

export const fetchTrending = (mediaType = 'movie', timeWindow = 'week') =>
  fetchWithErrorHandling(
    `${BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`
  );

export const searchMoviesByKeyword = (query) =>
  fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );

export const fetchMovieDetails = (movieId) =>
  fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

export const fetchActors = (movieId) =>
  fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

export const fetchReviewsForMovie = (movieId) =>
  fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

export const generateImageURL = (filePath, w = 500) =>
  `https://image.tmdb.org/t/p/w${w}${filePath}`;
