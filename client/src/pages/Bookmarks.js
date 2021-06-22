import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function Bookmarks() {
  return (
    <>
      <Headliner>Bookmarks</Headliner>
      <Navigation />
    </>
  );
}

const Headliner = styled.h1`
  text-align: center;
`;
