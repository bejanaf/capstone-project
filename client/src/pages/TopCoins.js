import styled from 'styled-components';
import Navigation from '../components/Navigation';
import TopCard from '../components/CoinsCard';

export default function TopCoins({ topCoins }) {
  return (
    <>
      <HeadLiner>Top 25 Cryptocurrencys</HeadLiner>
      <TopCard topCoins={topCoins} />
      <Navigation />
    </>
  );
}

const HeadLiner = styled.h1`
  text-align: center;
`;
