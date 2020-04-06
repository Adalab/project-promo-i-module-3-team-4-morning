import React, { useState } from 'react';
import PreviewPhoto from '../images/preview-photo.jpg';
import CardIcons from './CardIcons';

const Card = (props) => {
  return (
    <section className='card-sample'>
      <div className='card-sample--container'>
        <button className='card-sample--button'>
          <i className='far fa-trash-alt'></i> Reset
        </button>
        <div className='card-sample--card'>
          <h2 className={`card-sample--card__title title--palette-${props.state}`}>Nombre Apellido</h2>
          <h3 className={`card-sample--card__subtitle subtitle--palette-${props.state}`}>Front-end developer</h3>
          <img src={PreviewPhoto} alt='imagen de ejemplo' />
          <CardIcons classLink={`card-sample--item__link1 link--palette-${props.state}`} icon='fas fa-mobile-alt' />
          <CardIcons classLink={`card-sample--item__link2 link--palette-${props.state}`} icon='far fa-envelope' />
          <CardIcons classLink={`card-sample--item__link3 link--palette-${props.state}`} icon='fab fa-linkedin-in' />
          <CardIcons classLink={`card-sample--item__link4 link--palette-${props.state}`} icon='fab fa-github-alt' />
        </div>
      </div>
    </section>
  );
};

export default Card;
