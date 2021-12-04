import { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch, NavLink } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
import * as movieShelfAPI from 'services/movieshelf-api';
import CastSubView from './CastSubView';
import ReviewsSubView from './ReviewsSubView';

const MovieDetailsView = () => {
  const { url, path } = useRouteMatch();

  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <PageHeading text={movie?.original_title || `Movie ${movieId}`} />
      {movie && (
        <>
          <img
            src={movieShelfAPI.generateImageURL(movie.poster_path)}
            alt={movie.original_title}
          />
          <p>{movie.overview}</p>

          <h2>
            <NavLink to={`${url}/${movieId}/cast`}>Cast</NavLink>
          </h2>
          <Route path={`${path}/:movieId/cast`}>
            <CastSubView />
          </Route>

          <h2>
            <NavLink to={`${url}/${movieId}/reviews`}>Reviews</NavLink>
          </h2>
          <Route path={`${path}/:movieId/reviews`}>
            <ReviewsSubView />
          </Route>
        </>
      )}
    </>
  );
};

export default MovieDetailsView;
