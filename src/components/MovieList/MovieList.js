import { Link } from 'react-router-dom';
import classes from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={classes.list}>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <p>
              <Link to={`/movies/${id}`}>{title}</Link>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
