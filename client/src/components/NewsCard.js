import styled from 'styled-components';
import PropTypes from 'prop-types';
import favoriteNewsIconOne from '../image/favoriteNews1.png';
import favoriteNewsIconTwo from '../image/favoriteNews2.png';

export default function NewsCard({ article, onToggleBookmarkNews }) {
  return (
    <>
      <ArticleWrapper>
        <FavoriteIcon
          src={article.isFavorite ? favoriteNewsIconTwo : favoriteNewsIconOne}
          alt="Bookmark Icon"
          onClick={() => onToggleBookmarkNews(article)}
        />
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
    </>
  );
}

NewsCard.propTypes = {
  articles: PropTypes.array,
  onToggleBookmarkNews: PropTypes.func,
};

const ArticleWrapper = styled.div`
  background-color: var(--grey-darkest);
  display: flex;
  flex-direction: column;
  padding: 0 0.625rem;

  a {
    text-decoration: none;
  }
`;

const FavoriteIcon = styled.img`
  height: 3.5rem;
  width: 3.5;
  cursor: pointer;
  right: 5%;
  position: absolute;
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
