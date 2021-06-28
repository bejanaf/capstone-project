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
        .map((article, index) => (
          <section key={index + article}>
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
          </section>
        ))}
    </>
  );
}

const ArticleWrapper = styled.div`
  background-color: var(--grey-darkest);
  display: flex;
  flex-direction: column;
  padding: 0 0.625rem;

  a {
    text-decoration: none;
  }
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  right: 10%;
  position: absolute;

  svg {
    fill: orange;
    height: 2.5rem;
    stroke: var(--black);
    stroke-width: 15px;
    width: 2.5rem;
  }
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
