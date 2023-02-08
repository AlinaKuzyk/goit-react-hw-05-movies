import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  Container,
  FormStyled,
  InputStyled,
  ListSearch,
} from './Movies.styled';
import { getSearchMovie } from '../../api/api';
import { Link } from 'react-router-dom';

const Movies = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryString = location.search.replace(/\?query=/, '');

  const [searchWord, setSearchWord] = useState('');
  const [listFilms, setListFilms] = useState([]);

  useEffect(() => {
    if (queryString) {
      getSearchMovie(queryString).then(response => setListFilms(response));
    }
  }, [queryString]);

  const handleInputChange = event => {
    setSearchWord(event.currentTarget.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (searchWord.trim() === '') {
      alert('Please enter what do you want to find.');
      return;
    }
    setSearchParams({ query: searchWord });
  };

  return (
    <Container>
      <FormStyled onSubmit={handleFormSubmit}>
        <InputStyled onChange={handleInputChange} type="text" />
        <button type="submit">Search</button>
      </FormStyled>

      <ListSearch>
        {listFilms.map(film => (
          <li key={film.id}>
            <Link state={{ from: location }} to={`/movies/${film.id}`}>
              {film.original_title}
            </Link>
          </li>
        ))}
      </ListSearch>
    </Container>
  );
};

export default Movies;
