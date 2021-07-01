import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import { loadFromLocal, saveToLocal } from '../lib/localStorage';
import { ReactComponent as Close } from '../image/close.svg';
import validateEntry from '../lib/validation';
export default function AddForm({
  onAddCoin,
  exchanges,
  selectedCoin,
  onSetFormView,
}) {
  const initialCoinState = {
    name: selectedCoin.name,
    symbol: selectedCoin.symbol,
    image: selectedCoin.image,
    buyOrSell: '',
    exchange: '',
    price: '',
    quantity: '',
    date: '',
    note: '',
  };

  const [portfolioCoin, setPortfolioCoin] = useState(
    loadFromLocal('portfolioCoin') ?? initialCoinState
  );

  const [isError, setIsError] = useState(false);
  useEffect(() => {
    saveToLocal('portfolioCoin', portfolioCoin);
  }, [portfolioCoin]);

  function updateCoin(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    setPortfolioCoin({ ...portfolioCoin, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (validateEntry(portfolioCoin)) {
      onAddCoin(portfolioCoin);
      setPortfolioCoin(initialCoinState);
      onSetFormView(false);
      setIsError(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }
  }
  return (
    <Modal>
      <div className="modal_open">
        <Form onSubmit={handleFormSubmit}>
          <HeadlineWrapper>
            <HeadlineName>{selectedCoin.name} Buy or Sell</HeadlineName>
            <CloseIcon
              title="Close"
              role="img"
              onClick={() => onSetFormView(false)}
            />
          </HeadlineWrapper>
          <BuyOrSell>
            <label htmlFor="buyOrSell"></label>
            <input
              type="radio"
              value="buy"
              name="buyOrSell"
              onChange={updateCoin}
              checked={portfolioCoin.buyOrSell === 'buy'}
            />{' '}
            Buy
            <input
              type="radio"
              value="sell"
              name="buyOrSell"
              onChange={updateCoin}
              checked={portfolioCoin.buyOrSell === 'sell'}
            />{' '}
            Sell
          </BuyOrSell>
          <label htmlFor="price">Price per Coin*</label>
          <input
            type="text"
            name="price"
            onChange={updateCoin}
            value={portfolioCoin.price}
            placeholder="In USD"
          />
          <label htmlFor="quantity">Quantity*</label>
          <input
            type="text"
            name="quantity"
            onChange={updateCoin}
            value={portfolioCoin.quantity}
            placeholder="0"
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            onChange={updateCoin}
            value={portfolioCoin.date}
          />
          <label htmlFor="exchange">Exchange</label>
          <select
            id="exchange"
            name="exchange"
            onChange={updateCoin}
            value={portfolioCoin.exchange}
            placeholder="Please select..."
          >
            <option value="Please select...">Please select...</option>
            {exchanges.map((exchange) => (
              <option value={exchange.name}>{exchange.name}</option>
            ))}
          </select>
          <label htmlFor="note">Note</label>
          <input
            type="text"
            name="note"
            onChange={updateCoin}
            value={portfolioCoin.note}
            placeholder="Tap to add a note"
          />
          {isError && (
            <ErrorBox isError={isError}>
              Missing or wrong entries. Please check your input.
            </ErrorBox>
          )}
          <AddButton>Add Transaction</AddButton>
        </Form>
      </div>
      <div className="modal_open--overlay" />
    </Modal>
  );
}

const Modal = styled.div`
  position: relative;
  .modal_open {
    background-color: #333333;
    border-radius: 0.5rem;
    display: flex;
    flex-flow: column wrap;
    margin: auto;
    padding: 1rem;
    position: absolute;
    width: 100vw;
    z-index: 200;
  }

  .modal_open--overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  margin: 0 13px 0px 15px;
  width: 20rem;
  label {
    font-weight: bold;
  }
`;

const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  position: relative;
`;

const HeadlineName = styled.h2`
  background-color: #333333;
  padding: 0;
  margin: 0;
`;

const CloseIcon = styled(Close)`
  cursor: pointer;
  height: 1.9rem;
  position: absolute;
  right: 0.2rem;
  width: 1.9rem;
`;

const BuyOrSell = styled.section`
  display: flex;
  font-weight: bold;
  gap: 1rem;
  justify-content: space-between;
  padding-right: 2.5rem;
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  border-radius: 0.5rem;
  color: hsl(340, 80%, 80%);
  display: flex;
  padding: 1rem;
  text-align: center;
`;

const AddButton = styled.button`
  background: var(--primary);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  padding: 0.75rem;
  margin-top: 1rem;
`;
