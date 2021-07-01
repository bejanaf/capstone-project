import styled from 'styled-components';
import favoriteNewsIconOne from '../image/favoriteNews1.png';
import favoriteNewsIconTwo from '../image/favoriteNews2.png';

export default function BookmarkCards({ bookmarks, onToggleBookmarkNews }) {
  return (
    <>
      {bookmarks.map((bookmark) => (
        <ArticleWrapper>
          <FavoriteIcon
            src={
              bookmark.isFavorite ? favoriteNewsIconTwo : favoriteNewsIconOne
            }
            alt="Bookmark Icon"
            onClick={() => onToggleBookmarkNews(bookmark)}
          />
          <NewsImage src={bookmark.urlToImage} alt="Image of article" />
          <Title>{bookmark.title}</Title>
          <TitleAndAutorWrapper>
            <Author>{bookmark.author}</Author>
            <PublishedAt>
              {bookmark.publishedAt.slice(0, 10)}{' '}
              {bookmark.publishedAt.slice(11, 19)}
            </PublishedAt>{' '}
          </TitleAndAutorWrapper>
          <p>
            {bookmark.description}
            <a href={bookmark.url} alt="Link of article">
              {' '}
              Go to full article
            </a>
          </p>
        </ArticleWrapper>
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
