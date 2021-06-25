import styled from 'styled-components';
import { ReactComponent as FavoriteIcon } from '../image/btc-icon.svg';

export default function NewsCard({ articles, onToggleBookmarkNews }) {
  return (
    <>
      {articles
        .filter(
          (article, index) =>
            !articles.some(
              (articleToCheck, articleToCheckIndex) =>
                articleToCheck.title === article.title &&
                articleToCheckIndex !== index
            )
        )
        .map((article) => (
          <p>
            {article.urlToImage === null ||
            article.description === 0 ||
            article.author === null ? null : (
              <ArticleWrapper>
                <FavoriteButton>
                  <FavoriteIcon
                    alt="Bookmark Icon"
                    onClick={() => onToggleBookmarkNews(article)}
                  />
                </FavoriteButton>
                <NewsImage src={article.urlToImage} alt="Image of article" />
                <Title>{article.title}</Title>
                <TitleAndAutorWrapper>
                  <Author>{article.author}</Author>
                  <PublishedAt>
                    {article.publishedAt.slice(0, 10)}{' '}
                    {article.publishedAt.slice(11, 19)}
                  </PublishedAt>{' '}
                </TitleAndAutorWrapper>
                <p>
                  {article.description}
                  <a href={article.url} alt="Link of article">
                    {' '}
                    Go to full article
                  </a>
                </p>
              </ArticleWrapper>
            )}
          </p>
        ))}
    </>
  );
}

const ArticleWrapper = styled.div`
  background-color: var(--grey-darkest);
  display: flex;
  flex-direction: column;
  padding: 0 0.625rem;
  position: relative;

  a {
    text-decoration: none;
  }

  svg {
    fill: orange;
    height: 2.5rem;
    stroke: var(--black);
    stroke-width: 3px;
    width: 2.5rem;
  }
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  left: 25%;
  cursor: pointer;
  position: absolute;
`;

const HeadLiner = styled.h1`
  text-align: center;
`;

const TitleAndAutorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
`;

const Title = styled.h2`
  background-color: var(--grey-darkest);
`;

const PublishedAt = styled.p`
  display: flex;
  flex-direction: column;
`;

const Author = styled.p`
  font-weight: bold;
`;

const NewsImage = styled.img`
  margin-top: 0.625rem;
  width: 22.188rem;
`;
