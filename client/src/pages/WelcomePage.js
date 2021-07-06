import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../image/logo.svg';

export default function WelcomePage() {
  return (
    <PageWrapper>
      <Headliner className="shade">WELCOME TO</Headliner>
      <Logo />
      <AppName>CRYPTO STARTER</AppName>

      <AppUsecases>Latest News</AppUsecases>
      <AppUsecases>Save Important Articles</AppUsecases>
      <AppUsecases>Top 25 Currencies</AppUsecases>
      <AppUsecases>Create Your Own Wallets</AppUsecases>
      <StartTheApp>
        Make Your First Experience
        <Link to="/news"> Here</Link>
      </StartTheApp>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  align-items: center;
  border: 1px solid transparent;
  border-image: linear-gradient(
    180deg,
    rgba(249, 0, 147, 1) 0%,
    rgba(0, 214, 208, 1) 20%,
    rgba(0, 215, 198, 1) 80%,
    rgba(249, 0, 147, 1) 100%
  );
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;

  svg {
    filter: drop-shadow(0rem 0rem 2rem var(--primary));
    margin-top: 1.5rem;
  }

  h1 {
    margin-top: 2rem;
  }
`;

const Headliner = styled.h1`
  color: hsl(330, 100%, 85%);
  font-family: neon;
  font-size: 2rem;
  text-shadow: 0 0 4px #f09, 0 0 10px #f09, 0 0 18px #fff, 0 0 38px #f09;
`;

const AppName = styled.h2`
  color: var(--primary);
  margin-bottom: 2.5rem;
`;

const AppUsecases = styled.p`
  margin: 0;
  font-style: italic;
`;

const StartTheApp = styled.p`
  margin-top: 2.5rem;
`;
