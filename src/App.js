import { Switch, Route } from 'react-router-dom';
import News from './pages/News';
import Bookmarks from './pages/Bookmarks';
import Wallet from './pages/Wallet';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/wallet">
          <Wallet />
        </Route>
      </Switch>
      <Navigation />
    </div>
  );
}

export default App;
