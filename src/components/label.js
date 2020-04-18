import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  return (
    <label htmlFor={props.For}>
      {props.text} <span className="form-object"> *</span>
    </label>
  );
};
export default Label;
Label.propTypes = {
  For: PropTypes.string,
  text: PropTypes.string,
};
