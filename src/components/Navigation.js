import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NewsIcon } from '../image/news-icon.svg';
import { ReactComponent as BitcoinIcon } from '../image/btc-icon.svg';
import { ReactComponent as WalletIcon } from '../image/wallet.svg';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavBar>
        <NavLink exact to="/" className="navButton">
          <NavigationIcon>
            <NewsIcon />
          </NavigationIcon>
        </NavLink>

        <NavLink to="/bookmarks" className="navButton">
          <NavigationIcon>
            <BitcoinIcon />
          </NavigationIcon>
        </NavLink>

        <NavLink to="/wallet" className="navButton">
          <NavigationIcon>
            <WalletIcon />
          </NavigationIcon>
        </NavLink>
      </NavBar>
    </NavigationWrapper>
  );
}

const NavigationIcon = styled.span`
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NavBar = styled.div`
  border: 3px solid black;
  border-radius: 100vh;
  display: flex;
  justify-content: space-around;
  justify-items: center;
  padding-top: 0.25rem;
  width: 90vw;

  .active {
    svg {
      path {
        fill: yellow;
      }
    }
  }
`;
