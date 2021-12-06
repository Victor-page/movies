import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import PageHeading from 'components/PageHeading';
import * as movieShelfAPI from 'services/movieshelf-api';

import MovieCard from 'components/MovieCard';
import Status from 'utils/state-machine';

const MovieDetailsView = () => {
  const history = useHistory();
  const location = useLocation();
  const { slug } = useParams();

  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const movieId = slug.match(/[a-zA-Z0-9]+$/)[0];

  useEffect(() => {
    setStatus(Status.PENDING);
    movieShelfAPI
      .fetchMovieDetails(movieId)
      .then((movie) => {
        setMovie(movie);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <PageHeading
        text={
          status === Status.RESOLVED
            ? movie.original_title
            : `Movie № ${movieId}`
        }
      />
      <button type="button" onClick={onGoBack}>
        Back
      </button>
      {status === Status.PENDING && <p>Loading...</p>}
      {status === Status.REJECTED && <p>{error.message}</p>}
      {status === Status.RESOLVED && <MovieCard movie={movie} />}
    </>
  );
};

export default MovieDetailsView;
