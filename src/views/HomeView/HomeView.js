import { useState, useEffect } from 'react';

import * as movieShelfAPI from 'services/movieshelf-api';
import PageHeading from 'components/PageHeading';
import MovieList from 'components/MovieList';
import Status from 'utils/state-machine';

const HomeView = () => {
  // const { url } = useRouteMatch();

  const [trending, setTrending] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    movieShelfAPI
      .fetchTrending()
      .then(({ results: trending }) => {
        setTrending(trending);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <>
      <PageHeading text="Trending This Week" />
      {status === Status.PENDING && <p>Loading...</p>}
      {status === Status.REJECTED && <p>{error.message}</p>}
      {status === Status.RESOLVED && <MovieList movies={trending} />}
    </>
  );
};

export default HomeView;
