import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from 'components/Navigation';
import MovieDetailsView from 'views/MovieDetailsView';
import MoviesView from 'views/MoviesView';

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: 'home-view' */)
);
const NotFoundView = lazy(() =>
  import('views/NotFoundView' /* webpackChunkName: 'not-found-view' */)
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
