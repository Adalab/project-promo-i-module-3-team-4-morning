import React from 'react';
const Label = props => {
  return (
    <label htmlFor={props.For}>
      {props.text} <span className='form-object'> *</span>
    </label>
  );
};
export default Label;
