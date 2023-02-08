import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import { Wrapper, TextWrapper, InfoWrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  //   getMovieDetails();
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  const location = useLocation();

  useEffect(() => {
    async function movieDetails() {
      const movie = await getMovieDetails(movieId);
      setMovie(movie);
    }
    movieDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <Wrapper>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://static.wikia.nocookie.net/otonari-no-tenshi/images/c/c9/No_images_available.jpg/revision/latest/scale-to-width-down/350?cb=20220104141308'
          }
          alt={movie.title}
          width="200px"
        />
        <TextWrapper>
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
        </TextWrapper>
      </Wrapper>

      <InfoWrapper>
        <h4> Additional information</h4>

        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </InfoWrapper>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
