import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className={classes.link}
        activeClassName={classes['active-link']}
        to="/"
        exact
      >
        Main
      </NavLink>
      <NavLink
        className={classes.link}
        activeClassName={classes['active-link']}
        to="/authors"
      >
        Authors
      </NavLink>
      <NavLink
        className={classes.link}
        activeClassName={classes['active-link']}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
