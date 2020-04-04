import React from 'react';
import PreviewPhoto from '../images/preview-photo.jpg';
import CardIcons from './CardIcons';

const Card = () => {
  return (
    <section className='card-sample'>
      <div className='card-sample--container'>
        <button className='card-sample--button'>
          <i className='far fa-trash-alt'></i> Reset
        </button>
        <div className='card-sample--card'>
          <h2 className='card-sample--card__title'>Nombre Apellido</h2>
          <h3 className='card-sample--card__subtitle'>Front-end developer</h3>
          <img className='js-card-sample--card__img' src={PreviewPhoto} alt='imagen de ejemplo' />
          <CardIcons classLink='card-sample--item__link1 js-card-sample--item__link js-tel-preview' icon='fas fa-mobile-alt' />
          <CardIcons classLink='card-sample--item__link2 js-card-sample--item__link js-email-preview' icon='far fa-envelope' />
          <CardIcons classLink='card-sample--item__link3 js-card-sample--item__link js-linkedin-preview' icon='fab fa-linkedin-in' />
          <CardIcons classLink='card-sample--item__link4 js-card-sample--item__link js-github-preview' icon='fab fa-github-alt' />
        </div>
      </div>
    </section>
  );
};

export default Card;
