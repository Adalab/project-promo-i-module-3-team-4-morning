import React from 'react';
import CardIcons from './CardIcons';

const Card = (props) => {
  console.log(props);
  return (
    <section className='card-sample'>
      <div className='card-sample--container'>
        <button className='card-sample--button'>
          <i className='far fa-trash-alt'></i> Reset
        </button>
        <div className='card-sample--card'>
          <h2 className={`card-sample--card__title title--palette-${props.statePalette}`}>Nombre Apellido</h2>
          <h3 className={`card-sample--card__subtitle subtitle--palette-${props.statePalette}`}>Front-end developer</h3>
          <img src={props.stateImg} alt='imagen de ejemplo' />
          <CardIcons classLink={`card-sample--item__link1 link--palette-${props.statePalette}`} icon='fas fa-mobile-alt' />
          <CardIcons classLink={`card-sample--item__link2 link--palette-${props.statePalette}`} icon='far fa-envelope' />
          <CardIcons classLink={`card-sample--item__link3 link--palette-${props.statePalette}`} icon='fab fa-linkedin-in' />
          <CardIcons classLink={`card-sample--item__link4 link--palette-${props.statePalette}`} icon='fab fa-github-alt' />
        </div>
      </div>
    </section>
  );
};

export default Card;
