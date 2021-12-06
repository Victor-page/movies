import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import classes from './MovieList.module.css';

const makeSlug = (string) => slugify(string, { lower: true });

const makeIdentifier = (title, id) => makeSlug(`${title} ${id}`);

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={classes.list}>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <p>
              <Link
                to={{
                  pathname: `/movies/${makeIdentifier(title, id)}`,
                  state: { from: location },
                }}
              >
                {title}
              </Link>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
