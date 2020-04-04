import React from "react";
import ColorsRadio from "./Palettes-color-radio";

const Radio = (props) => {
  return (
    <div className="design--form__item">
      <input id={props.id} className={props.className} type="radio" name="select-palette" />
      <ColorsRadio paletteClass={props.paletteClass} colorA={props.colorA} colorB={props.colorB} colorC={props.colorC} />
    </div>
  );
};

export default Radio;
