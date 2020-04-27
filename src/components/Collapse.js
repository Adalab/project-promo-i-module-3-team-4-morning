import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Collapse = (props) => {
  const [arrow1, setArrow1] = useState('closed');
  // const [arrow2, setArrow2] = useState('closed');
  // const [arrow3, setArrow3] = useState('closed');

  function handleClick(ev) {
    props.handleCollapse(ev.currentTarget.id);
    if (arrow1 === 'closed') {
      setArrow1('');
    } else {
      setArrow1('closed');
    }
  }

  return (
    <section className={props.margin}>
      <div id={props.id} onClick={handleClick} className={props.colClass}>
        <span className='share--icon1'>
          <i className={props.icon}></i>
        </span>
        <h3 className='share--text'>{props.title}</h3>
        <i className={`fas fa-angle-up ${props.close} ${arrow1}`}></i>
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
