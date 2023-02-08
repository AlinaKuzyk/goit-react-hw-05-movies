import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/api';
import { ListGrid } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(response => setActors(response));
  }, [movieId]);

  return (
    <>
      <ListGrid>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : 'https://static.wikia.nocookie.net/otonari-no-tenshi/images/c/c9/No_images_available.jpg/revision/latest/scale-to-width-down/350?cb=20220104141308'
              }
              alt={actor.name}
              width="100px"
            />
            <p>{actor.title || actor.name}</p>
          </li>
        ))}
      </ListGrid>
    </>
  );
};

export default Cast;
