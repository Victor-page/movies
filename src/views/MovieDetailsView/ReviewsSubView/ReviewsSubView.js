import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from 'components/ReviewsList';
import * as movieShelfAPI from 'services/movieshelf-api';
import Status from 'utils/state-machine';
const { PENDING, REJECTED, RESOLVED } = Status;

const ReviewsSubView = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(PENDING);
  const [error, setError] = useState(null);

  useEffect(() => {
    movieShelfAPI
      .fetchReviewsForMovie(movieId)
      .then(({ results }) => {
        setReviews(results);
        setStatus(RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [movieId]);

  if (status === PENDING) {
    return <p>Loading...</p>;
  }

  if (status === REJECTED) {
    return <p>{error.message}</p>;
  }

  if (status === RESOLVED) {
    return <ReviewsList reviews={reviews} />;
  }
};

export default ReviewsSubView;
