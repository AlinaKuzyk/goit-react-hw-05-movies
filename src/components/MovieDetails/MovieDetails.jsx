import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';

const MovieDetails = () => {
  //   getMovieDetails();
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function movieDetails() {
      const movie = await getMovieDetails(movieId);
      setMovie(movie);
    }
    movieDetails();
  }, []);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width="200px"
        />
        <h2>
          {movie.title} {movie.release_date?.slice(0, 4)}
        </h2>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>
          {movie.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </p>
      </div>

      <div>
        <h4> Additional information</h4>

        <ul>
          <li>
            <Link to={`/movie/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
