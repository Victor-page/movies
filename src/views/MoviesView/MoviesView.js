import { useState, useEffect } from 'react';
import PageHeading from 'components/PageHeading';
import SearchMoviesForm from 'components/SearchMoviesForm';
import * as movieShelfAPI from 'services/movieshelf-api';
import MovieList from 'components/MovieList';
import Status from 'utils/state-machine';

const MoviesView = () => {
  const [foundMovies, setFoundMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const handleSubmit = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus(Status.PENDING);
    movieShelfAPI
      .searchMoviesByKeyword(query)
      .then(({ results }) => {
        setFoundMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [query]);

  return (
    <>
      <PageHeading text="Search for Movies" />
      <SearchMoviesForm onSubmit={handleSubmit} />
      {status === Status.PENDING && <p>Loading...</p>}
      {status === Status.REJECTED && <p>{error.message}</p>}
      {status === Status.RESOLVED && <MovieList movies={foundMovies} />}
    </>
  );
};

export default MoviesView;
