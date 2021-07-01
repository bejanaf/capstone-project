import styled from 'styled-components';
import Navigation from '../components/Navigation';
import CoinsCard from '../components/CoinsCard';
import ShowLogo from '../components/Header';

export default function TopCoins({
  topCoins,
  onToggleFavoriteCoins,
  onSetSelectedCoin,
  onSetWalletOverview,
}) {
  return (
    <>
      <HeadLiner>
        <ShowLogo />
        Top 25 Currencys
      </HeadLiner>
      {topCoins.map((topCoin, index) => (
        <CoinsCard
          index={index}
          topCoin={topCoin}
          onToggleFavoriteCoins={onToggleFavoriteCoins}
          onSetSelectedCoin={onSetSelectedCoin}
          onSetWalletOverview={onSetWalletOverview}
        />
      ))}
      <Navigation />
    </>
  );
}

const HeadLiner = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;
