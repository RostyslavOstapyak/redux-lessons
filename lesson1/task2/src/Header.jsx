import React from 'react';
import UserMenu from './UserMenu.jsx';

class Header extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <header className="header">
        <UserMenu />
      </header>
    );
  }
}

export default Header;
