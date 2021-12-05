import classes from './ReviewsList.module.css';
import * as movieShelfAPI from 'services/movieshelf-api';

const ReviewsList = ({ reviews }) => {
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

  if (!reviews.length) {
    return <p>We do not have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map(
        ({ id, author, content, author_details: { avatar_path } }) => (
          <li key={id}>
            <p>
              <span>{author}</span>
            </p>
            {avatar_path && (
              <img
                src={createSrc(avatar_path)}
                alt={author}
                className={classes.avatar}
              />
            )}
            <p>
              "<span>{content}</span>"
            </p>
          </li>
        )
      )}
    </ul>
  );
};

export default ReviewsList;
