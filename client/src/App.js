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
  const [topCoins, setTopCoins] = useState(loadFromLocal('topCoins') ?? []);
  const [favoriteCoins, setFavoriteCoins] = useState(
    loadFromLocal('favoriteCoins') ?? []
  );

  console.log('topCoins:', topCoins);

  useEffect(() => {
    saveToLocal('bookmarks', bookmarks);
  }, [bookmarks]);

  useEffect(() => {
    saveToLocal('topCoins', topCoins);
  }, [topCoins]);

  useEffect(() => {
    saveToLocal('favoriteCoins', favoriteCoins);
  }, [favoriteCoins]);

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
      .then((topCoins) => {
        const updatedTopCoins = topCoins.map((topCoin) => {
          return {
            ...topCoin,
            isFavorite: favoriteCoins.some(
              (favoriteCoin) => favoriteCoin.id === topCoin.id
            ),
          };
        });
        setTopCoins(updatedTopCoins);
      })
      .catch((error) => console.error(error.message));
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

  function toggleFavoriteCoins(walletCoins) {
    const likedCoins = topCoins.map((topCoin) => {
      if (topCoin === walletCoins) {
        topCoin.isFavorite = !topCoin.isFavorite;
      }
      return topCoin;
    });
    setTopCoins(likedCoins);
    const favoriteCoins = topCoins.filter((topCoin) => topCoin.isFavorite);
    setFavoriteCoins(favoriteCoins);
  }

  console.log('Zeig mir die Favoriten:', favoriteCoins);

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
          <TopCoins
            topCoins={topCoins}
            favoriteCoins={favoriteCoins}
            onToggleFavoriteCoins={toggleFavoriteCoins}
          />
        </Route>

        <Route path="/wallet">
          <Wallet favoriteCoins={favoriteCoins} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
