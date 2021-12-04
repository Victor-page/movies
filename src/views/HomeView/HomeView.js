import { useState, useEffect } from 'react';
import {
  Link,
  // useRouteMatch
} from 'react-router-dom';
import * as movieShelfAPI from 'services/movieshelf-api';
import PageHeading from 'components/PageHeading';
import classes from './HomeView.module.css';

const HomeView = () => {
  // const { url } = useRouteMatch();

  const [moviesResponse, setMoviesResponse] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchTrending().then(setMoviesResponse);
  }, []);

  const movies = moviesResponse?.results && moviesResponse.results;

  return (
    <>
      <PageHeading text="Trending This Week" />

      {movies && (
        <ul className={classes.list}>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <p>
                  <Link to={`/movies/${id}`}>{title}</Link>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default HomeView;
