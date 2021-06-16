export default function News({ articles }) {
  return (
    <>
      <h1>News</h1>
      {articles.map((article) => (
        <p>{article.title}</p>
      ))}
    </>
  );
}
