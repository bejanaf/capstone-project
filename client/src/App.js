import { Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import News from './pages/News';
import Bookmarks from './pages/Bookmarks';
import Wallet from './pages/Wallet';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/news')
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setArticles(response);
      });
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/news">
          <News articles={articles} />
        </Route>

        <Route path="/bookmarks">
          <Bookmarks />
        </Route>

        <Route path="/wallet">
          <Wallet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
