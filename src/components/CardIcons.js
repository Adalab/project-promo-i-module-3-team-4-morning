import React from 'react';

const CardIcons = (props) => {
  return (
    <div className="card-sample--item">
      <a className={props.classLink} href={props.url} target="_blank">
        <i className={props.icon}></i>
      </a>
    </div>
  );
};
export default CardIcons;
