import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import NewsCard from '../components/NewsCard';
import ShowLogo from '../components/Header';

export default function News({ articles, onToggleBookmarkNews }) {
  return (
    <>
      <NewsWrapper>
        <HeadLiner>
          <ShowLogo />
          Latest News
        </HeadLiner>
        {articles
          .filter(
            (article, index) =>
              !articles.some(
                (articleToCheck, articleToCheckIndex) =>
                  articleToCheck.title === article.title &&
                  articleToCheckIndex !== index
              )
          )
          .map((article, index) => (
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

News.propTypes = {
  articles: PropTypes.array,
  onToggleBookmarkNews: PropTypes.func,
};

const HeadLiner = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 0rem 0rem 0.9rem var(--primary), 0rem 0rem 0.5rem var(--primary);
`;

const NewsWrapper = styled.section`
  margin-bottom: 4.5rem;
`;
