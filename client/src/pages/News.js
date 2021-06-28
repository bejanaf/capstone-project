import styled from 'styled-components';
import Navigation from '../components/Navigation';
import NewsCard from '../components/NewsCard';

export default function News({ articles, onToggleBookmarkNews }) {
  console.log('show input', articles);
  console.log(articles.indexOf(articles.title));
  return (
    <>
      <NewsWrapper>
        <HeadLiner>Latest News</HeadLiner>
        <NewsCard
          articles={articles}
          onToggleBookmarkNews={onToggleBookmarkNews}
        />
      </NewsWrapper>
      <Navigation />
    </>
  );
}

const HeadLiner = styled.h1`
  text-align: center;
`;

const NewsWrapper = styled.section`
  margin-bottom: 4.5rem;
`;
