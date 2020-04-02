import React from 'react';
import ColorsRadio from './Palettes-color-radio';

const Radio = props => {
  return (
    <div className="design--form__item">
      <input id="js-radio-design-palette-1" type="radio" name="select-palette" className="js-radio-design-palette-1" />
      <div className="design--palette1">
        <ColorsRadio colorA="design--palette1__colorA" colorB="design--palette1__colorB" colorC="design--palette1__colorC" />
      </div>
      <div className="design--palette2">
        <ColorsRadio colorA="design--palette2__colorA" colorB="design--palette2__colorB" colorC="design--palette2__colorC" />
      </div>
      <div className="design--palette3">
        <ColorsRadio colorA="design--palette3__colorA" colorB="design--palette3__colorB" colorC="design--palette3__colorC" />
      </div>
    </div>
  );
};

export default Radio;
