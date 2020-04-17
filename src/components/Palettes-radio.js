import React from 'react';
import ColorsRadio from './Palettes-color-radio';
import PropTypes from 'prop-types';

const Radio = (props) => {
  const handleChange = (ev) => {
    props.handlePalette1(ev.currentTarget.id);
  };
  console.log(props.statePalette);

  return (
    <label className="design--form__item" htmlFor={props.id}>
      <input id={props.id} className={props.className} type="radio" name="select-palette" onChange={handleChange} value={props.statePalette} defaultChecked={props.statePalette === '1'} />
      <ColorsRadio paletteClass={props.paletteClass} colorA={props.colorA} colorB={props.colorB} colorC={props.colorC} />
    </label>
  );
};

export default Radio;
Radio.propTypes = {
  handlePalette1: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  paletteClass: PropTypes.string,
  colorA: PropTypes.string,
  ColorB: PropTypes.string,
  ColorC: PropTypes.string,
};
