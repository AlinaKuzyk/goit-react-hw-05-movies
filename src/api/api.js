import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e605ee81342c35fd1fbb230d28f41f28',
  },
});

export const getTrendingMovie = async () => {
  const response = await api.get('/trending/movie/week');
  //   console.log(response.data.results);
  return response.data.results;
};

export const getMovieDetails = async movie_id => {
  const response = await api.get(`/movie/${movie_id}`);
  //   console.log(response.data);
  return response.data;
};

export const getMovieCast = async movie_id => {
  const response = await api.get(`/movie/${movie_id}/credits`);
  console.log(response);
  return response;
};
