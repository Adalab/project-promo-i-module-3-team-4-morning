import React from 'react';
import Logo from '../images/logo-awesome-profile-cards.svg';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='logo' src={Logo} alt='Awesome profile cards' />
      </div>
    </header>
  );
};

export default Header;
