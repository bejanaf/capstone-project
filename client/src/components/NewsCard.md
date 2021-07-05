```jsx
const article = {
  isFavorite: true,
  urlToImage:
    'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1221293664/large_image_1221293664.jpg',
  title: 'Test Article',
  author: 'Sabrina Müller',
  publishedAt: '2021-07-04 18:04:29',
  description:
    '4 out of 23 CEF sectors positive on price and 1 out of 23 sectors positive on NAV last week. Check out the Weekly Closed-End Fund Roundup here.',
  url: 'https://seekingalpha.com/article/4437803-weekly-closed-end-fund-roundup-june-20-2021',
};
<NewsCard
  article={article}
  onToggleBookmarkNews={() => alert('Added to bookmarks')}
/>;
```
