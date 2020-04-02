import React from 'react';

const ColorsRadio = props => {
  return (
    <div>
      {/* // <div className="'design--palette1"> */}
      <div className={props.colorA}></div>
      <div className={props.colorB}></div>
      <div className={props.colorC}></div>
    </div>
  );
};
export default ColorsRadio;
