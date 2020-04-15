import React from 'react';
import ColorsRadio from './Palettes-color-radio';

const Radio = (props) => {
  const handleChange = (ev) => {
    props.handlePalette1(ev.currentTarget.id);
  };

  return (
    <label className="design--form__item" htmlFor={props.id}>
      <input id={props.id} className={props.className} type="radio" name="select-palette" onChange={handleChange} />
      <ColorsRadio paletteClass={props.paletteClass} colorA={props.colorA} colorB={props.colorB} colorC={props.colorC} />
    </label>
  );
};

export default Radio;
