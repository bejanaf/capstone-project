import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <NavLink exact to="/" className="navButton">
        News
      </NavLink>

      <NavLink to="/bookmarks" className="navButton">
        Bookmarks
      </NavLink>

      <NavLink to="/wallet" className="navButton">
        Wallet
      </NavLink>
    </div>
  );
}
