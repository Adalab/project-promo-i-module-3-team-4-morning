import React from 'react';
import PropTypes from 'prop-types';

const Collapse = (props) => {
  function handleClick(ev) {
    props.handleCollapse(ev.currentTarget.id);

    //aquí tengo que encontrar una manera de que cuando clicke de true o false, eso lo paso por handleCollapse y es lo que le meto al estado en App
  }
  // "share js-share-title"
  return (
    <section className={props.margin}>
      <div id={props.id} onClick={handleClick} className={props.colClass}>
        <span className='share--icon1'>
          <i className={props.icon}></i>
        </span>
        <h3 className='share--text'>{props.title}</h3>
        <a href='/' className='share--icon2'>
          <i className={`js-arrow fas fa-angle-up ${props.close}`}></i>
        </a>
      </div>
      {props.children}
    </section>
  );
};

export default Collapse;
Collapse.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  close: PropTypes.string,
  children: PropTypes.any,
};
