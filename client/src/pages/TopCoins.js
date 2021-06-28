import styled from 'styled-components';
import Navigation from '../components/Navigation';
import TopCard from '../components/CoinsCard';

export default function TopCoins({ topCoins, onToggleFavoriteCoins }) {
  return (
    <>
      <HeadLiner>Top 25 Cryptocurrencys</HeadLiner>
      <TopCard
        topCoins={topCoins}
        onToggleFavoriteCoins={onToggleFavoriteCoins}
      />
      <Navigation />
    </>
  );
}

const HeadLiner = styled.h1`
  text-align: center;
`;
