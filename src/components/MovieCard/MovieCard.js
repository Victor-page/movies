import { lazy, Suspense } from 'react';
import { Route, useRouteMatch, NavLink } from 'react-router-dom';
import classes from './MovieCard.module.css';
import * as movieShelfAPI from 'services/movieshelf-api';

const CastSubView = lazy(() =>
  import(
    'views/MovieDetailsView/CastSubView' /* webpackChunkName: 'cast-sub-view' */
  )
);

const ReviewsSubView = lazy(() =>
  import(
    'views/MovieDetailsView/ReviewsSubView' /* webpackChunkName: 'review-sub-view' */
  )
);

const MovieCard = ({ movie }) => {
  const { url, path } = useRouteMatch();

  return (
    <article>
      <section>
        <img
          src={movieShelfAPI.generateImageURL(movie.poster_path)}
          alt={movie.original_title}
          className={classes.poster}
        />
        <p>{movie.overview}</p>
      </section>

      <section>
        <h2>Genres</h2>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
      </section>

      <section>
        <h2>Additional Information</h2>

        <Suspense fallback={<h1>Loading...</h1>}>
          <h3>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </h3>
          <Route path={`${path}/cast`}>
            <CastSubView />
          </Route>
        </Suspense>

        <Suspense fallback={<h1>Loading...</h1>}>
          <h3>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </h3>
          <Route path={`${path}/reviews`}>
            <ReviewsSubView />
          </Route>
        </Suspense>
      </section>
    </article>
  );
};

export default MovieCard;
