import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import PageHeading from 'components/PageHeading';
import * as movieShelfAPI from 'services/movieshelf-api';
import GoBackButton from 'components/GoBackButton';
import MovieCard from 'components/MovieCard';
import getIdFromSlug from 'utils/get-id-from-slug';
import Status from 'utils/state-machine';
const { IDLE, PENDING, REJECTED, RESOLVED } = Status;

const MovieDetailsView = () => {
  const history = useHistory();
  const location = useLocation();
  const { slug } = useParams();

  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  const movieId = getIdFromSlug(slug);

  useEffect(() => {
    setStatus(PENDING);
    movieShelfAPI
      .fetchMovieDetails(movieId)
      .then((movie) => {
        setMovie(movie);
        setStatus(RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <PageHeading
        text={status === RESOLVED ? movie.original_title : `Movie № ${movieId}`}
      />
      <GoBackButton onGoBack={handleGoBack} />
      {status === PENDING && <p>Loading...</p>}
      {status === REJECTED && <p>{error.message}</p>}
      {status === RESOLVED && <MovieCard movie={movie} />}
    </>
  );
};

export default MovieDetailsView;
