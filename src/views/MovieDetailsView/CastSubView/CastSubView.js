import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from 'services/movieshelf-api';

const CastSubView = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    movieShelfAPI.fetchActors(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast?.cast &&
        cast.cast.map(({ id, name, character }) => {
          return (
            <li key={id}>
              <p>
                Name: <span>{name}</span>
              </p>
              <p>
                Character: <span>{character}</span>
              </p>
            </li>
          );
        })}
    </ul>
  );
};

export default CastSubView;
