import React from 'react';
import AdalabLogo from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer--title'>
          <small>Awesome profile-cards @2020</small>
        </div>
        <div>
          <img className='footer--logo' src={AdalabLogo} alt='Logo Adalab' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
