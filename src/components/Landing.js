import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-awesome-profile-cards.svg';
import Footer from './Footer';
const Landing = () => {
  return (
    <>
      <main>
        <div className='landing'>
          <img className='landing--logo' src={logo} alt='Logo' />
          <h1 className='landing--title'>Crea tu tarjeta de visita</h1>
          <p className='landing--text'>Crea mejores contactos profesionales de forma fácil y cómoda</p>
          <div className='landing--rectangle'>
            <ul className='landing--list'>
              <li className='landing--list__item'>
                <div className='landing--list__link' href=''>
                  <i className='far fa-object-ungroup landing--list__icon'></i>
                  <p>Diseña</p>
                </div>
              </li>
              <li className='landing--list__item'>
                <div className='landing--list__link' href=''>
                  <i className='far fa-keyboard landing--list__icon'></i>
                  <p>Rellena</p>
                </div>
              </li>
              <li className='landing--list__item'>
                <div className='landing--list__link' href=''>
                  <i className='fas fa-share-alt landing--list__icon'></i>
                  <p>Comparte</p>
                </div>
              </li>
            </ul>
          </div>
          <Link className='landing--button' to='/userinterface'>
            comenzar
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
