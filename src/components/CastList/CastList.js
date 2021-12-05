import * as movieShelfAPI from 'services/movieshelf-api';

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <p>
            <span>{name}</span>
          </p>
          <img
            src={movieShelfAPI.generateImageURL(profile_path, 200)}
            alt={name}
          />
          <p>
            Character: <span>{character}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
