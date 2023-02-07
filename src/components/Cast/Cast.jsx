import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react';
import { getMovieCast } from '../../api/api';

const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState({});

  useEffect(() => {
    async function movieCast() {
      const actors = await getMovieCast(movieId);
      console.log(actors);
      setActors(actors);
    }
    movieCast();
  }, []);

  return (
    <ul>
      {actors.map(actor => (
        <li>
          <img src="" alt="" />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
