import styled from 'styled-components';
import { ReactComponent as FavoriteIcon } from '../image/btc-icon.svg';

export default function BookmarkCards({ bookmarks, onToggleBookmarkNews }) {
  return (
    <>
      {bookmarks.map((bookmark) => (
        <ArticleWrapper>
          <FavoriteButton>
            <FavoriteIcon
              alt="Bookmark Icon"
              onClick={() => onToggleBookmarkNews(bookmark)}
            />
          </FavoriteButton>
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
