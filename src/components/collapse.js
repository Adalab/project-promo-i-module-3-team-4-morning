import React from 'react';

const Collapse = (props) => {
  return (
    <section>
      <div className='share js-share-title'>
        <span className='share--icon1'>
          <i className={props.icon}></i>
        </span>
        <h3 className='share--text'>{props.title}</h3>
        <a href='/' className='share--icon2'>
          <i className='js-arrow fas fa-angle-up'></i>
        </a>
      </div>
      <div>{props.children}</div>
    </section>
  );
};

export default Collapse;
