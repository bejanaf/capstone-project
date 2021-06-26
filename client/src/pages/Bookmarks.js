import styled from 'styled-components';
import Navigation from '../components/Navigation';
import BookmarkCards from '../components/BookmarkCard';

export default function Bookmarks({ bookmarks, onToggleBookmarkNews }) {
  return (
    <>
      <Headliner>Bookmarks</Headliner>
      <BookmarkCards
        bookmarks={bookmarks}
        onToggleBookmarkNews={onToggleBookmarkNews}
      />
      <Navigation />
    </>
  );
}

const Headliner = styled.h1`
  text-align: center;
`;
