import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from 'services/movieshelf-api';

const ReviewsSubView = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    movieShelfAPI.fetchReviewsForMovie(movieId).then(setReviews);
  }, [movieId]);

  const deleteFirstCharacter = (string) => string.substring(1);

  const createSrc = (path) => {
    if (path.includes('gravatar')) {
      if (path.charAt(0) === '/') {
        return deleteFirstCharacter(path);
      }

      return path;
    }

    return movieShelfAPI.generateImageURL(path, 200);
  };

  return reviews?.results ? (
    <ul>
      {reviews.results.map(
        ({ id, author, content, author_details: { avatar_path } }) => {
          return (
            <li key={id}>
              <p>
                <span>{author}</span>
              </p>
              {avatar_path && <img src={createSrc(avatar_path)} alt={author} />}
              <p>
                "<span>{content}</span>"
              </p>
            </li>
          );
        }
      )}
    </ul>
  ) : (
    <p>No</p>
  );
};

export default ReviewsSubView;
