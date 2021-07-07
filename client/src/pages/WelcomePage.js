import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../image/logo.svg';

export default function WelcomePage() {
  return (
    <PageWrapper>
      <h1>Welcome to</h1>
      <Logo />
      <AppName>Crypto Starter</AppName>

      <AppUsecases>Latest News</AppUsecases>
      <AppUsecases>Save important Articles</AppUsecases>
      <AppUsecases>Create Wallets</AppUsecases>
      <StartTheApp>
        Make your first experience
        <Link to="/news"> here</Link>
      </StartTheApp>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  svg {
    filter: drop-shadow(0rem 0rem 1rem var(--primary));
    margin-top: 2.5rem;
  }
`;

const AppName = styled.h2`
  color: var(--primary);
  margin-bottom: 2.5rem;
`;

const AppUsecases = styled.p`
  margin: 0;
`;

const StartTheApp = styled.p`
  margin-top: 2.5rem;
`;
