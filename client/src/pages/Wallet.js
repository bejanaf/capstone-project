import styled from 'styled-components';
import Navigation from '../components/Navigation';
import CoinsCard from '../components/CoinsCard';
import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';
import WalletOverview from './WalletOverview';
import AddForm from './AddForm';

export default function Wallet({ favoriteCoins, exchanges }) {
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
      <Headliner>Wallet</Headliner>
      {favoriteCoins.map((favoriteCoin) => (
        <CoinsCard topCoin={favoriteCoin} />
      ))}
      <WalletOverview portfolioCoins={portfolioCoins} />
      <AddForm onAddCoin={addCoin} exchanges={exchanges} />
      <Navigation />
    </>
  );
}

const Headliner = styled.h1`
  text-align: center;
`;
