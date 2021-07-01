import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NewsIcon } from '../image/news-icon.svg';
import { ReactComponent as BitcoinIcon } from '../image/btc-icon.svg';
import { ReactComponent as WalletIcon } from '../image/wallet.svg';
import { ReactComponent as TopCoinsIcon } from '../image/topCoins.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavLinkStyled to="/news" className="navButton">
        <IconNameWrapper>
          <NewsIcon />
          <IconName>News</IconName>
        </IconNameWrapper>
      </NavLinkStyled>

      <NavLinkStyled to="/bookmarks" className="navButton">
        <IconNameWrapper>
          <BitcoinIcon />
          <IconName>Bookmarks</IconName>
        </IconNameWrapper>
      </NavLinkStyled>

      <NavLinkStyled to="/topCoins" className="navButton">
        <IconNameWrapper>
          <TopCoinsIcon />
          <IconName>Top 25</IconName>
        </IconNameWrapper>
      </NavLinkStyled>

      <NavLinkStyled to="/wallet" className="navButton">
        <IconNameWrapper>
          <WalletIcon />
          <IconName>Wallet</IconName>
        </IconNameWrapper>
      </NavLinkStyled>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.div`
  align-items: center;
  background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 0.1px,
      var(--black) 0.1px,
      var(--black) 0.2px
    ),
    linear-gradient(to top, var(--black) 60%, var(--primary-light));
  bottom: 0;
  color: var(--white);
  display: flex;
  justify-content: space-around;
  left: 0;
  padding-bottom: 0.4rem;
  padding-top: 0.9rem;
  position: fixed;
  width: 100%;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--grey-dark);
  }

  .active {
    color: var(--primary-light);
    svg {
      path {
        fill: var(--primary-light);
      }
    }
  }
`;

const IconNameWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: var(--grey-dark);
`;

const IconName = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;
