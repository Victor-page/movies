import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      className={classes.link}
      activeClassName={classes['active-link']}
      to="/"
      exact
    >
      Home
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

export default Navigation;
