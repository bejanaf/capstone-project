import styled from 'styled-components/macro';
import Navigation from '../components/Navigation';
import CoinsCard from '../components/CoinsCard';
import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';
import WalletOverview from './WalletOverview';
import AddForm from './AddForm';
import Header from '../components/Header';

export default function Wallet({
  favoriteCoins,
  exchanges,
  walletOverview,
  onSetWalletOverview,
  onToggleFavoriteCoins,
}) {
  const [selectedCoin, setSelectedCoin] = useState({});
  const [historicalCoins, setHistoricalCoins] = useState([]);
  const [formView, setFormView] = useState(false);
  const [portfolioCoins, setPortfolioCoins] = useState(
    loadFromLocal('portfolioCoins') ?? []
  );

  useEffect(() => {
    saveToLocal('portfolioCoins', portfolioCoins);
  }, [portfolioCoins]);

  function addCoin(portfolioCoin) {
    setPortfolioCoins([...portfolioCoins, portfolioCoin]);
  }

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
        />
      )}
      {favoriteCoins.map((favoriteCoin) => (
        <CoinsCard
          topCoin={favoriteCoin}
          onSetSelectedCoin={setSelectedCoin}
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

const Headliner = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;
