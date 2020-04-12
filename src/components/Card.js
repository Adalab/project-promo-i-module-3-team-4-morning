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
          <h2 className={`card-sample--card__title title--palette-${props.statePalette}`}>{props.InputState.name || 'Nombre Apellidos'}</h2>
          <h3 className={`card-sample--card__subtitle subtitle--palette-${props.statePalette}`}>{props.InputState.job || 'Front-end Developer'}</h3>
          <div className='card-sample--card__img-cont'>
            <img className='card-sample--card__img' src={props.stateImg} alt='imagen de ejemplo' />
          </div>
          <CardIcons classLink={`card-sample--item__link1 link--palette-${props.statePalette}`} icon='fas fa-mobile-alt' url={`tel:${props.InputState.phone}`} />
          <CardIcons classLink={`card-sample--item__link2 link--palette-${props.statePalette}`} icon='far fa-envelope' url={`mailto:${props.InputState.email}`} />
          <CardIcons classLink={`card-sample--item__link3 link--palette-${props.statePalette}`} icon='fab fa-linkedin-in' url={`https://www.linkedin.com/in/${props.InputState.linkedin}`} />
          <CardIcons classLink={`card-sample--item__link4 link--palette-${props.statePalette}`} icon='fab fa-github-alt' url={`https://www.github.com/${props.InputState.github}`} />
        </div>
      </div>
    </section>
  );
};

export default Card;
