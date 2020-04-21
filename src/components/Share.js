import React from 'react';
import PropTypes from 'prop-types';
let isHidden = 'hidden';
const Share = (props) => {
  // NOS QUEDAMOS AQUÍ. TENÍAMOS QUE ESCUCAR AL BOTÓN
  const handleShare = (ev) => {
    console.log(ev.currentTarget);
    props.PostDataToApi();
    if (isHidden === 'hidden') {
      isHidden = '';
    }
  };
  return (
    <div className={props.display}>
      <div className='share--button__container'>
        <button onClick={handleShare} className={`share--button ${props.active}`}>
          <i className='far fa-address-card'></i>Crear tarjeta
        </button>
      </div>
      <div className={`share--card--created ${isHidden}`}>
        <h3 className='share--card--created--text'>La tarjeta ha sido creada</h3>
        <p className='share--card--created--awesome-prof'>{props.url}</p>
        <a className='share--card--created--button' href={`https://twitter.com/intent/tweet?text=Hey!%20Mira%20que%20tarjeta%20he%20creado%20${props.url}`}>
          <i className='fab fa-twitter'></i> Compartir en twitter
        </a>
      </div>
    </div>
  );
};

export default Share;
Share.propTypes = {
  display: PropTypes.string,
};
