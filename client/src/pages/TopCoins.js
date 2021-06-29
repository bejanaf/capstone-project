import styled from 'styled-components';
import Navigation from '../components/Navigation';
import CoinsCard from '../components/CoinsCard';

export default function TopCoins({ topCoins, onToggleFavoriteCoins }) {
  return (
    <>
      <HeadLiner>Top 25 Cryptocurrencys</HeadLiner>
      {topCoins.map((topCoin, index) => (
        <CoinsCard
          index={index}
          topCoin={topCoin}
          onToggleFavoriteCoins={onToggleFavoriteCoins}
        />
      ))}
      <Navigation />
    </>
  );
}

const HeadLiner = styled.h1`
  text-align: center;
`;
