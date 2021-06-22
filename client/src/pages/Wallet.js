import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function Wallet() {
  return (
    <>
      <Headliner>Wallet</Headliner>
      <Navigation />
    </>
  );
}

const Headliner = styled.h1`
  text-align: center;
`;
