import React from 'react';

const Button = (props) => {
  return (
    <button className={props.buttonClass}>
      <i className={props.iconClass}></i> {props.text}
    </button>
  );
};

export default Button;
