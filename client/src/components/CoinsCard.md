```jsx
const topCoin = {
  image:
    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  name: 'Bitcoin',
  isFavorite: true,
  symbol: 'BTC',
  current_price: 35510.0,
  price_change_percentage_24h: 232333,
  market_cap: '665700000000',
  total_volume: '22300000000',
};

<div style={{ width: '375px' }}>
  <CoinsCard
    topCoin={topCoin}
    onToggleFavoriteCoins={() => alert('Added to topCoins')}
  />
</div>;
```
