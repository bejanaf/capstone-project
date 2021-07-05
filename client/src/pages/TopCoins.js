import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import CoinsCard from '../components/CoinsCard.js';
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
          key={index + topCoin}
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

TopCoins.propTypes = {
  topCoin: PropTypes.arrayOf(Object),
  onToggleFavoriteCoins: PropTypes.func,
  onSetSelectedCoin: PropTypes.func,
  onSetWalletOverview: PropTypes.func,
};

const HeadLiner = styled.h1`
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 0rem 0rem 0.9rem var(--primary), 0rem 0rem 0.5rem var(--primary);
`;
