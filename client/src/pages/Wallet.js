import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function Wallet({ favoriteCoins }) {
  return (
    <>
      <Headliner>Wallet</Headliner>
      {favoriteCoins.map((favoriteCoin) => (
        <WalletWrapper>
          <span>
            LocalStorage test, disyplay name of favorite coin:{' '}
            {favoriteCoin.name}
          </span>
        </WalletWrapper>
      ))}
      <Navigation />
    </>
  );
}

const Headliner = styled.h1`
  text-align: center;
`;

const WalletWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
