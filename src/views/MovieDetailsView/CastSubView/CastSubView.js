import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from 'services/movieshelf-api';
import CastList from 'components/CastList';
import getIdFromSlug from 'utils/get-id-from-slug';
import Status from 'utils/state-machine';
const { PENDING, REJECTED, RESOLVED } = Status;

const CastSubView = () => {
  const { slug } = useParams();

  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(PENDING);
  const [error, setError] = useState(null);

  const movieId = getIdFromSlug(slug);

  useEffect(() => {
    setStatus(PENDING);
    movieShelfAPI
      .fetchActors(movieId)
      .then(({ cast }) => {
        setCast(cast);
        setStatus(RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [movieId]);

  if (status === PENDING) {
    return <p>Loading...</p>;
  }

  if (status === REJECTED) {
    return <p>{error.message}</p>;
  }

  if (status === RESOLVED) {
    return <CastList cast={cast} />;
  }
};

export default CastSubView;
