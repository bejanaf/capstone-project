import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ReactComponent as Close } from '../image/close.svg';
import { ReactComponent as PlusIcon } from '../image/add.svg';
import TrashCan from '../image/delete1.png';

export default function WalletOverview({ portfolioCoins }) {
  const history = useHistory();
  const clickedCoin = history.location.state;

  const historicalCoins = portfolioCoins.filter(
    (historicalCoin) => historicalCoin.name === clickedCoin.name
  );

  function navigateToForm() {
    history.push('/portfolio/addform', clickedCoin);
  }

  return (
    <>
      <HeadlineWrapper>
        <HeadlineName>{clickedCoin.name} History</HeadlineName>
        {/* useState um zu closen */}
        <CloseIcon title="Close" role="img" />
      </HeadlineWrapper>
      <div>
        <span>Name</span>
        <span>Price</span>
        <span>Value</span>
      </div>
      {historicalCoins.map((coin) => {
        return (
          <>
            <CoinWrapper>
              <CoinRow>
                <ExchangeWrapper>
                  <Exchange>{coin.exchange}</Exchange>
                  <Date>{coin.date}</Date>
                </ExchangeWrapper>
                <CoinData>
                  <PriceWrapper>
                    <CoinPrice>${parseInt(coin.price).toFixed(2)}</CoinPrice>
                    <BuyOrSell>{coin.buyOrSell}</BuyOrSell>
                  </PriceWrapper>
                  <HoldingsWrapper>
                    {coin.buyOrSell === 'buy' ? (
                      <HoldingsBuy>
                        ${parseInt(coin.price * coin.quantity).toFixed(2)}
                      </HoldingsBuy>
                    ) : (
                      <HoldingsSell>
                        ${parseInt(coin.price * coin.quantity).toFixed(2)}
                      </HoldingsSell>
                    )}
                    {coin.buyOrSell === 'buy' ? (
                      <QuantityBuy>
                        {coin.quantity} {coin.symbol}
                      </QuantityBuy>
                    ) : (
                      <QuantitySell>
                        {coin.quantity * -1} {coin.symbol}
                      </QuantitySell>
                    )}
                  </HoldingsWrapper>
                </CoinData>
                <TrashCanImage title="TrashCan" role="img" />
              </CoinRow>
            </CoinWrapper>
          </>
        );
      })}
      <AddButton onClick={navigateToForm}>
        Add to Wallet
        <AddSign title="Plus" role="img" />
      </AddButton>
      <Navigation />
    </>
  );
}

const HeadlineWrapper = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 110px;
  padding-bottom: 41px;
  position: relative;
  width: 346px;
`;

const HeadlineName = styled.h2`
  padding: 0;
  margin: 0;
`;

const CloseIcon = styled(Close)`
  left: 15rem;
  top: 0.15rem;
  height: 1.2rem;
  width: 1.2rem;
  margin: 0 1.5rem 0 3rem;
  cursor: pointer;
  position: absolute;
`;

const CoinWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 328px;
  height: 5.625rem;
  border-bottom: 1px solid #d7d7d7;
`;

const NoteRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 1.25rem;
  border-bottom: 1px solid #d7d7d7;
`;

const ExchangeWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  width: 4rem;
`;

const PriceWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const HoldingsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Exchange = styled.span`
  width: 4rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const Date = styled.span`
  width: 4.75rem;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinPrice = styled.span`
  width: 5rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const BuyOrSell = styled.span`
  width: 5rem;
`;

const HoldingsBuy = styled.span`
  width: 5rem;
  padding-bottom: 10px;
  font-weight: bold;
  color: green;
`;

const HoldingsSell = styled.span`
  width: 5rem;
  padding-bottom: 10px;
  font-weight: bold;
  color: red;
`;

const QuantityBuy = styled.span`
  width: 5rem;
  color: green;
  text-transform: uppercase;
`;

const QuantitySell = styled.span`
  width: 5rem;
  color: red;
  text-transform: uppercase;
`;

const TrashCanImage = styled(TrashCan)`
  height: 1.75rem;
  width: 1.75rem;
  margin-left: 10px;
  cursor: pointer;
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #ffc608, #f7931a, #b1583e);
  border-radius: 50%;
  border: none;
  width: 3.25rem;
  height: 3.25rem;
  bottom: 8rem;
  right: 1.5rem;
  cursor: pointer;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;

const AddSign = styled(PlusIcon)`
  border-radius: 50%;
  width: 1.65rem;
  height: 1.65rem;
  bottom: 8.75rem;
  right: 2.3rem;
  cursor: pointer;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;
