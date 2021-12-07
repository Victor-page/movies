import PropTypes, { arrayOf } from 'prop-types';
import * as movieShelfAPI from 'services/movieshelf-api';

const CastList = ({ cast }) => (
  <ul>
    {cast.map(({ id, name, character, profile_path }) => (
      <li key={id}>
        <p>
          <span>{name}</span>
        </p>
        {profile_path && (
          <img
            src={movieShelfAPI.generateImageURL(profile_path, 200)}
            alt={name}
          />
        )}
        <p>
          Character: <span>{character}</span>
        </p>
      </li>
    ))}
  </ul>
);

CastList.propTypes = {
  cast: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default CastList;
