import { Switch, Route } from 'react-router-dom';
import News from './pages/News';
import Bookmarks from './pages/Bookmarks';
import Wallet from './pages/Wallet';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/news')
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setArticles(response);
      });
  });

  return (
    <div>
      <h1>Was antwortet der Server</h1>
      <Switch>
        <Route exact path="/">
          <News articles={articles} />
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
