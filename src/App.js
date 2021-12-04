import { Route, Switch } from 'react-router-dom';
import Navigation from 'components/Navigation';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import MovieDetailsView from 'views/MovieDetailsView';
import NotFoundView from 'views/NotFoundView';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <MoviesView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
