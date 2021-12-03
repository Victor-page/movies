import { Route, Switch } from 'react-router';
import Navigation from 'components/Navigation';
import HomeView from 'views/HomeView';
import AuthorsView from 'views/AuthorsView';
import BooksView from 'views/BooksView';
import NotFoundView from 'views/NotFoundView';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact>
        <HomeView />
      </Route>
      <Route path="/authors">
        <AuthorsView />
      </Route>
      <Route path="/books">
        <BooksView />
      </Route>

      <Route>
        <NotFoundView />
      </Route>
    </div>
  );
}

export default App;
