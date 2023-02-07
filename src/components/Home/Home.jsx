import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovie } from '../../api/api';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const film = await getTrendingMovie();
      setTrendingMovie(film);
    }
    getFilms();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>

      <ul>
        {trendingMovie.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
