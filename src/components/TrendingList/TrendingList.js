import { Link } from 'react-router-dom';
import classes from './TrendingList.module.css';

const TrendingList = ({ trending }) => {
  return (
    <ul className={classes.list}>
      {trending.map(({ id, title }) => {
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

export default TrendingList;
