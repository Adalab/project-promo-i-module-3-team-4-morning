import React from "react";
import PropTypes from "prop-types";

const ColorsRadio = (props) => {
  return (
    <div className={props.paletteClass}>
      <div className={props.colorA}></div>
      <div className={props.colorB}></div>
      <div className={props.colorC}></div>
    </div>
  );
};
export default ColorsRadio;
ColorsRadio.propTypes = {
  paletteClass: PropTypes.string,
  colorA: PropTypes.string,
  ColorB: PropTypes.string,
  ColorC: PropTypes.string,
};
