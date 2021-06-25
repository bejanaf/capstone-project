import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Bookmarks from './pages/Bookmarks';
import WelcomePage from './pages/WelcomePage';
import News from './pages/News';
import Wallet from './pages/Wallet';
import { loadFromLocal, saveToLocal } from './lib/localStorage';

function App() {
  const [articles, setArticles] = useState([]);
  const [bookmarks, setBookmarks] = useState(loadFromLocal('bookmarks') ?? []);
  console.log('Ist hier etwas drinnen?', bookmarks);

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

        <Route path="/wallet">
          <Wallet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
