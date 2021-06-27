import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadFromLocal, saveToLocal } from './lib/localStorage';
import Bookmarks from './pages/Bookmarks';
import WelcomePage from './pages/WelcomePage';
import News from './pages/News';
import Wallet from './pages/Wallet';
import TopCoins from './pages/TopCoins';

function App() {
  const [articles, setArticles] = useState([]);
  const [bookmarks, setBookmarks] = useState(loadFromLocal('bookmarks') ?? []);
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    saveToLocal('bookmarks', bookmarks);
  }, [bookmarks]);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setArticles(response);
      });
  }, []);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h'
    )
      .then((result) => result.json())
      .then((topCoins) => setTopCoins(topCoins))
      .catch((error) => console.error(error.message));

    const updatedTopCoins = topCoins.map((coins) => {
      return {
        ...coins,
        isFavorite: false,
      };
    });
    setTopCoins(updatedTopCoins);
  }, []);

  function toggleBookmarkNews(bookmarkNews) {
    const likedNews = articles.map((article) => {
      if (article === bookmarkNews) {
        article.isFavorite = !article.isFavorite;
      }
      return article;
    });
    setArticles(likedNews);
    const favoriteArticles = articles.filter((article) => article.isFavorite);
    setBookmarks(favoriteArticles);
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/news">
          <News articles={articles} onToggleBookmarkNews={toggleBookmarkNews} />
        </Route>

        <Route path="/bookmarks">
          <Bookmarks
            bookmarks={bookmarks}
            onToggleBookmarkNews={toggleBookmarkNews}
          />
        </Route>

        <Route path="/topCoins">
          <TopCoins topCoins={topCoins} />
        </Route>

        <Route path="/wallet">
          <Wallet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
