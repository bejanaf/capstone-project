import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import FavoriteCoinsCard from '../components/FavoriteCoins.js';
import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';
import WalletOverview from './WalletOverview';
import AddForm from './AddForm';
import Header from '../components/Header';

export default function Wallet({
  favoriteCoins,
  exchanges,
  walletOverview,
  selectedCoin,
  onSetWalletOverview,
  onToggleFavoriteCoins,
  onSetSelectedCoin,
}) {
  const [historicalCoins, setHistoricalCoins] = useState([]);
  const [formView, setFormView] = useState(false);
  const [portfolioCoins, setPortfolioCoins] = useState(
    loadFromLocal('portfolioCoins') ?? []
  );
  /*   const [totalCoinBalance, setTotalCoinBalance] = useState({}); */

  useEffect(() => {
    saveToLocal('portfolioCoins', portfolioCoins);
  }, [portfolioCoins]);

  function addCoin(portfolioCoin) {
    setPortfolioCoins([...portfolioCoins, portfolioCoin]);
  }
  /* 
  function calculateTotalBalance() {
    const boughtCoins = portfolioCoins.filter(
      (boughtCoin) => boughtCoin.buyOrSell === 'buy'
    );
    const totalBuy = boughtCoins.reduce(
      (a, b) => parseFloat(a) + parseFloat(b.value),
      0
    );

    const soldTotal = portfolioCoins.filter(
      (soldCoins) => soldCoins.buyOrSell === 'sell'
    );
    const totalSell = soldTotal.reduce(
      (a, b) => parseFloat(a) + parseFloat(b.value),
      0
    );

    const totalBalance = totalBuy - totalSell;
    setTotalCoinBalance(totalBalance);
    console.log('TotalCoinBalance', totalBalance);
    return totalBalance;
  }
 */
  return (
    <>
      <Headliner>
        <Header />
        Wallet
      </Headliner>
      {formView && (
        <AddForm
          onAddCoin={addCoin}
          exchanges={exchanges}
          selectedCoin={selectedCoin}
          formView={formView}
          onSetFormView={setFormView}
        />
      )}
      {walletOverview && (
        <WalletOverview
          historicalCoins={historicalCoins}
          portfolioCoins={portfolioCoins}
          selectedCoin={selectedCoin}
          onSetWalletOverview={onSetWalletOverview}
          walletOverview={walletOverview}
          onSetFormView={setFormView}
          onSetPortfolioCoins={setPortfolioCoins}
          /*           onCalculateTotalBalance={calculateTotalBalance} */
        />
      )}
      {favoriteCoins.map((favoriteCoin, index) => (
        <FavoriteCoinsCard
          key={index + favoriteCoin}
          topCoin={favoriteCoin}
          onSetSelectedCoin={onSetSelectedCoin}
          historicalCoins={historicalCoins}
          onSetHistoricalCoins={setHistoricalCoins}
          onSetWalletOverview={onSetWalletOverview}
          walletOverview={walletOverview}
          onToggleFavoriteCoins={onToggleFavoriteCoins}
        />
      ))}
      <Navigation />
    </>
  );
}

Wallet.propTypes = {
  favoriteCoins: PropTypes.array,
  exchanges: PropTypes.array,
  walletOverview: PropTypes.bool,
  onSetWalletOverview: PropTypes.func,
  onToggleFavoriteCoins: PropTypes.func,
};

const Headliner = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;
