import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className={props.buttonClass} href={props.href}>
      <i className={props.iconClass}></i> {props.text}
    </button>
  );
};

export default Button;
Button.propTypes = {
  buttonClass: PropTypes.string,
  iconClass: PropTypes.string,
  text: PropTypes.string,
};
