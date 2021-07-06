import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import NewsCard from '../components/NewsCard';
import Header from '../components/Header';

export default function Bookmarks({ bookmarks, onToggleBookmarkNews }) {
  return (
    <>
      <NewsWrapper>
        <Headliner>
          <Header />
          Bookmarks
        </Headliner>
        {bookmarks.map((article, index) => (
          <section key={index + article}>
            {article.urlToImage === null ||
            article.description === 0 ||
            article.author === null ? null : (
              <NewsCard
                article={article}
                onToggleBookmarkNews={onToggleBookmarkNews}
              />
            )}
          </section>
        ))}
      </NewsWrapper>
      <Navigation />
    </>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  onToggleBookmarkNews: PropTypes.func,
};

const Headliner = styled.h1`
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 0rem 0rem 0.9rem var(--primary), 0rem 0rem 0.5rem var(--primary);
`;

const NewsWrapper = styled.div`
  margin-bottom: 4.5rem;
`;
