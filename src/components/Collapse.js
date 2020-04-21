import React from 'react';
import PropTypes from 'prop-types';

const Collapse = (props) => {
  function handleClick(ev) {
    props.handleCollapse(ev.currentTarget.id);
  }

  return (
    <section className={props.margin}>
      <div id={props.id} onClick={handleClick} className={props.colClass}>
        <span className='share--icon1'>
          <i className={props.icon}></i>
        </span>
        <h3 className='share--text'>{props.title}</h3>
        <i className={`fas fa-angle-up ${props.close}`}></i>
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
