import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NewsIcon } from '../image/news-icon.svg';
import { ReactComponent as BitcoinIcon } from '../image/btc-icon.svg';
import { ReactComponent as WalletIcon } from '../image/wallet.svg';

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
  background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 0.1px,
      var(--black) 0.1px,
      var(--black) 0.2px
    ),
    linear-gradient(to top, var(--black) 60%, var(--primary));

  align-items: center;
  bottom: 0;
  box-shadow: 5px 5px 5px var(--primary);
  display: flex;
  color: white;
  justify-content: space-around;
  left: 0;
  padding-bottom: 0.4rem;
  padding-top: 0.9rem;
  position: sticky;
  width: 100%;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--grey-dark);
  }

  .active {
    color: var(--primary);
    svg {
      path {
        fill: var(--primary);
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
