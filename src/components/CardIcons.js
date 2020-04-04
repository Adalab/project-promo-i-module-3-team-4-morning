import React from 'react';
import Card from './Card';

const CardIcons = props => {
  return (
    <div className='card-sample--item'>
      <a className='card-sample--link' href=''>
        <i className={props.icon}></i>
      </a>
    </div>
  );
};
export default CardIcons;
