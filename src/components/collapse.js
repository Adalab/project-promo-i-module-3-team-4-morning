import React from 'react';

const Collapse = (props) => {
  let istrue;
  function handleClick(ev) {
    props.handleCollapse(ev.currentTarget.id);
    // if (ev.currentTarget.id) {
    //   istrue = true;
    // } else {
    //   istrue = false;
    // }
    // console.log(istrue);

    // console.log('Me han clickado', ev.target.id);
    //aquí tengo que encontrar una manera de que cuando clicke de true o false, eso lo paso por handleCollapse y es lo que le meto al estado en App
  }
  // console.log(props);

  return (
    <section>
      <div id={props.id} onClick={handleClick} className='share js-share-title'>
        <span className='share--icon1'>
          <i className={props.icon}></i>
        </span>
        <h3 className='share--text'>{props.title}</h3>
        <a href='/' className='share--icon2'>
          <i className={`js-arrow fas fa-angle-up ${props.close}`}></i>
        </a>
      </div>
      <div>{props.children}</div>
    </section>
  );
};

export default Collapse;
