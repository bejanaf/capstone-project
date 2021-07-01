import styled from 'styled-components';
import Navigation from '../components/Navigation';
import NewsCard from '../components/NewsCard';
import ShowLogo from '../components/Header';

export default function News({ articles, onToggleBookmarkNews }) {
  console.log('show input', articles);
  console.log(articles.indexOf(articles.title));
  return (
    <>
      <NewsWrapper>
        <HeadLiner>
          <ShowLogo />
          Latest News
        </HeadLiner>
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
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const NewsWrapper = styled.section`
  margin-bottom: 4.5rem;
`;
