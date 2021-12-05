import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
import SearchMoviesForm from 'components/SearchMoviesForm';
import * as movieShelfAPI from 'services/movieshelf-api';
import MovieList from 'components/MovieList';
import Status from 'utils/state-machine';
const { IDLE, PENDING, REJECTED, RESOLVED } = Status;

const MoviesView = () => {
  const [foundMovies, setFoundMovies] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (query) => {
    history.push({ ...location, search: `query=${query}` });
  };

  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setStatus(PENDING);
    movieShelfAPI
      .searchMoviesByKeyword(searchQuery)
      .then(({ results }) => {
        setFoundMovies(results);
        setStatus(RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [searchQuery]);

  return (
    <>
      <PageHeading text="Search for Movies" />
      <SearchMoviesForm onSubmit={handleSubmit} />
      {status === PENDING && <p>Loading...</p>}
      {status === REJECTED && <p>{error.message}</p>}
      {status === RESOLVED && <MovieList movies={foundMovies} />}
    </>
  );
};

export default MoviesView;
