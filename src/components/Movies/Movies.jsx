import { useState, useEffect, useSearchParams } from 'react';
import { Container } from './Movies.styled';
import { getSearchMovie } from '../../api/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  console.log(page);
  const query = searchParams.get('query') ?? '';
  console.log(query);

  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    async function searchFilm() {
      const film = await getSearchMovie(page, query);
      setMovie(film);
    }
    searchFilm();
  }, [page, query]);
  //   getSearchMovie();

  const handleInputChange = event => {
    console.log(event.currentTarget.value);
  };

  return (
    <Container>
      <form>
        <input type="text" onChange={handleInputChange} />

        <button type="submit">Search</button>
      </form>

      <ul></ul>
    </Container>
  );
};

export default Movies;

// const handleFormSubmit = event => {
//   event.preventDefault();

//   if (searchWord.trim() === '') {
//     alert('Please, enter what do you want to find.');
//     return;
//   }
//   setSearchParams({ query: searchWord.toLowerCase(), page: 1 });
// };
