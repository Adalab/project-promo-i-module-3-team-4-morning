import React from 'react';

const Share = () => {
  return (
    <section className='section--share'>
      {/* <!-- Boton --> */}
      <div className='js-share--div'>
        <div className='share--button__container'>
          <button className='share--button js-btn'>
            {' '}
            <i className='far fa-address-card'></i> Crear tarjeta
          </button>
        </div>

        {/* <!-- Tarjeta Creada --> */}
        <div className='share--card--created js-card-created'>
          <div className='share--card--created--text'>La tarjeta ha sido creada</div>
          <div className='share--card--created--awesome-prof js-share-url'>url creada</div>
          <div className='share--card--created--button__container'></div>
          <a className='share--card--created--button' href='https://twitter.com/intent/tweet?text=Hey!%20Mira%20que%20tarjeta%20he%20creado'>
            <i className='fab fa-twitter'></i> Compartir en twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Share;
