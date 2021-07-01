import styled from 'styled-components/macro';
import Navigation from '../components/Navigation';
import { ReactComponent as Close } from '../image/close.svg';
import { ReactComponent as PlusIcon } from '../image/add.svg';
import TrashCan from '../image/delete.png';
export default function WalletOverview({
  historicalCoins,
  selectedCoin,
  onSetWalletOverview,
  onSetFormView,
  portfolioCoins,
}) {
  return (
    <Modal>
      <div className="modal_open">
        {selectedCoin !== undefined && (
          <ContentWrapper>
            <HeadlineWrapper>
              <Headline>{selectedCoin.name} History</Headline>
              <CloseIcon
                title="Close"
                role="img"
                onClick={() => onSetWalletOverview(false)}
              />
            </HeadlineWrapper>
            <TableDescription>
              <TableName>Name</TableName>
              <TablePrice>Price</TablePrice>
              <span>Value</span>
            </TableDescription>
            {portfolioCoins.map((coin, index) => (
              <CoinWrapper key={index + coin}>
                <ExchangeWrapper>
                  <Exchange>{coin.exchange}</Exchange>
                  <Date>{coin.date}</Date>
                </ExchangeWrapper>
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
                  <TrashCanImage title="TrashCan" src={TrashCan} />
                </HoldingsWrapper>
              </CoinWrapper>
            ))}
            <AddButton onClick={() => onSetFormView(true)}>
              <AddSign title="Plus" role="img" />
            </AddButton>
          </ContentWrapper>
        )}
      </div>
      <div className="modal_open--overlay" />
      <Navigation />
    </Modal>
  );
}

const Modal = styled.div`
  position: relative;
  .modal_open {
    background-color: var(--white);
    border-radius: 0.5rem;
    color: var(--black);
    display: flex;
    flex-flow: column wrap;
    max-width: 90vw;
    margin: auto;
    padding: 1rem;
    position: sticky;
    top: 50%;
    z-index: 100;
  }

  .modal_open--overlay {
    background-color: rgba(0, 0, 0, 0.92);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Headline = styled.h2`
  background-color: var(--white);
  color: var(--black);
  font-weight: bold;
  padding-bottom: 1rem;
  text-align: center;
`;

const CloseIcon = styled(Close)`
  cursor: pointer;
  height: 1.5rem;
  position: absolute;
  right: -3rem;
  width: 1.5rem;
`;

const TableDescription = styled.section`
  border-bottom: 1px solid var(--black);
  display: flex;
`;

const TableName = styled.span`
  padding-right: 4rem;
`;

const TablePrice = styled.span`
  padding-right: 4rem;
`;

const CoinWrapper = styled.div`
  border-bottom: 1px solid #d7d7d7;
  cursor: pointer;
  display: flex;
  justify-content: start;
`;

const ExchangeWrapper = styled.span`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
`;

const Exchange = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  width: 4.75rem;
`;

const PriceWrapper = styled.span`
  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
  text-align: right;
`;

const CoinPrice = styled.span`
  font-weight: bold;
  width: 5rem;
`;

const BuyOrSell = styled.span`
  width: 5rem;
`;

const HoldingsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 0.5rem;
  text-align: right;
`;

const HoldingsBuy = styled.span`
  color: green;
  font-weight: bold;
  width: 5rem;
`;

const HoldingsSell = styled.span`
  color: red;
  font-weight: bold;
  padding-bottom: 10px;
  width: 5rem;
`;

const QuantityBuy = styled.span`
  color: green;
  text-transform: uppercase;
  width: 5rem;
`;

const QuantitySell = styled.span`
  color: red;
  text-transform: uppercase;
  width: 5rem;
`;

const TrashCanImage = styled.img`
  cursor: pointer;
  height: 1.75rem;
  margin-left: 3rem;
  width: 1.75rem;
`;

const AddButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--primary-light),
    var(--primary),
    var(--primary-dark)
  );
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  height: 3rem;
  place-items: center;
  width: 3rem;
`;

const AddSign = styled(PlusIcon)`
  border-radius: 50%;
  cursor: pointer;
  height: 1.65rem;
  width: 1.65rem;
`;
