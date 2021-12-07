import { lazy, Suspense } from 'react';
import { Route, useRouteMatch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const MovieCard = ({
  movie: { poster_path, original_title, overview, genres },
}) => {
  const { url, path } = useRouteMatch();

  return (
    <article>
      <section>
        <img
          src={movieShelfAPI.generateImageURL(poster_path)}
          alt={original_title}
          className={classes.poster}
        />
        <p>{overview}</p>
      </section>

      <section>
        <h2>Genres</h2>
        <ul>
          {genres.map((genre) => {
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default MovieCard;
