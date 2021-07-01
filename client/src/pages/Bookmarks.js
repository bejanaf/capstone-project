import styled from 'styled-components';
import Navigation from '../components/Navigation';
import BookmarkCards from '../components/BookmarkCard';
import ShowLogo from '../components/Header';

export default function Bookmarks({ bookmarks, onToggleBookmarkNews }) {
  return (
    <>
      <NewsWrapper>
        <Headliner>
          <ShowLogo />
          Bookmarks
        </Headliner>
        <BookmarkCards
          bookmarks={bookmarks}
          onToggleBookmarkNews={onToggleBookmarkNews}
        />
      </NewsWrapper>
      <Navigation />
    </>
  );
}

const Headliner = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const NewsWrapper = styled.div`
  margin-bottom: 4.5rem;
`;
