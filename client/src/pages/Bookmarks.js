import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function Bookmarks({ bookmarks, onToggleBookmarkNews }) {
  return (
    <>
      <Headliner>Bookmarks</Headliner>
      {bookmarks.map((bookmark) => (
        <h2>{bookmark.title}</h2>
      ))}
      <Navigation />
    </>
  );
}

const Headliner = styled.h1`
  text-align: center;
`;
