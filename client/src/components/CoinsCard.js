import styled from 'styled-components';

export default function Coinscard({ topCoins }) {
  function ShortenLargeNumbers(num) {
    if (num > 999999999) {
      return Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + ' B';
    } else {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + ' M';
    }
  }

  return (
    <>
      {topCoins.map((topCoin, index) => (
        <CoinWrapper key={index + topCoin}>
          <section>
            <CoinNameSymbole>
              <CoinImage src={topCoin.image} alt="Image of Coin" />
              <span>{topCoin.name}</span>
              <CoinSymbole>{topCoin.symbol}</CoinSymbole>
            </CoinNameSymbole>
            <CoinPriceChange>
              <CoinPricePercent>Price / 24h % </CoinPricePercent>
              <span>{topCoin.current_price.toFixed(2)} $</span>
              {topCoin.price_change_percentage_24h > 0 ? (
                <PositivePrice>
                  {topCoin.price_change_percentage_24h.toFixed(2)} %
                </PositivePrice>
              ) : (
                <NegativePrice>
                  {topCoin.price_change_percentage_24h.toFixed(2)} %
                </NegativePrice>
              )}
            </CoinPriceChange>
            <CoinCapVolume>
              <CoinMarketCapVolume>Market Cap/Volume</CoinMarketCapVolume>
              <span>{ShortenLargeNumbers(topCoin.market_cap)}</span>
              <span>{ShortenLargeNumbers(topCoin.total_volume)}</span>
            </CoinCapVolume>
          </section>
        </CoinWrapper>
      ))}
    </>
  );
}

const CoinWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.2rem;
  width: 100vw;

  section {
    display: flex;
  }
`;

const CoinNameSymbole = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.6rem;
  margin-top: 0.3rem;
  width: 33vw;
`;

const CoinImage = styled.img`
  background-color: white;
  border-radius: 50%;
  height: 1.1rem;
  padding: 0.1rem;
  width: 1.1rem;
`;

const CoinSymbole = styled.span`
  text-transform: uppercase;
`;

const CoinPriceChange = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vw;
`;

const PositivePrice = styled.span`
  color: green;
`;

const NegativePrice = styled.span`
  color: red;
`;

const CoinPricePercent = styled.span`
  align-items: flex-end;
  display: flex;
  font-size: 0.7rem;
  height: 1.344rem;
`;

const CoinCapVolume = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoinMarketCapVolume = styled.span`
  align-items: flex-end;
  display: flex;
  font-size: 0.7rem;
  height: 1.344rem;
`;
