import React from 'react';
import Radio from './Palettes-radio';
import PropTypes from 'prop-types';

const Palettes = (props) => {
  return (
    <section className="design">
      <div className={`design--container__2 ${props.display}`}>
        <p className="design--subtitle">Colores</p>
        <form className="js-form design--form" action="" method="GET">
          <Radio id="1" paletteClass="design--palette1" colorA="design--palette1__colorA" colorB="design--palette1__colorB" colorC="design--palette1__colorC" handlePalette1={props.handleChange} statePalette={props.statePalette} />

          <Radio id="2" paletteClass="design--palette2" colorA="design--palette2__colorA" colorB="design--palette2__colorB" colorC="design--palette2__colorC" handlePalette1={props.handleChange} />

          <Radio id="3" paletteClass="design--palette3" colorA="design--palette3__colorA" colorB="design--palette3__colorB" colorC="design--palette3__colorC" handlePalette1={props.handleChange} />
        </form>
      </div>
    </section>
  );
};

export default Palettes;
Palettes.propTypes = {
  display: PropTypes.string,
  handleChange: PropTypes.func,
};
