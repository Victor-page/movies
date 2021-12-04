import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
import * as movieShelfAPI from 'services/movieshelf-api';

const MovieDetailsView = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

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
        </>
      )}
    </>
  );
};

export default MovieDetailsView;
