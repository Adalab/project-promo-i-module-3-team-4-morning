import React from 'react';
import PropTypes from 'prop-types';
const Share = (props) => {
  // NOS QUEDAMOS AQUÍ. TENÍAMOS QUE ESCUCAR AL BOTÓN
  const handleShare = (ev) => {
    console.log(ev.currentTarget);

    props.PostDataToApi();
  };
  console.log(props);
  return (
    <div className={props.display}>
      <div className='share--button__container'>
        <button onClick={handleShare} className='share--button js-btn'>
          <i className='far fa-address-card'></i>Crear tarjeta
        </button>
      </div>
      {/* <!-- Tarjeta Creada --> */}
      <div className='share--card--created'>
        <div className='share--card--created--text'>La tarjeta ha sido creada</div>
        <div className='share--card--created--awesome-prof'>{props.url}</div>
        <div className='share--card--created--button__container'></div>
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
