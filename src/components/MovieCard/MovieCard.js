import { Route, useRouteMatch, NavLink } from 'react-router-dom';
import CastSubView from 'views/MovieDetailsView/CastSubView';
import ReviewsSubView from 'views/MovieDetailsView/ReviewsSubView';
import classes from './MovieCard.module.css';
import * as movieShelfAPI from 'services/movieshelf-api';

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

        <h3>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </h3>
        <Route path={`${path}/cast`}>
          <CastSubView />
        </Route>

        <h3>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </h3>
        <Route path={`${path}/reviews`}>
          <ReviewsSubView />
        </Route>
      </section>
    </article>
  );
};

export default MovieCard;
