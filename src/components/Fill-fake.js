import React from 'react';
import Input from './Input';
import Label from './Label';
import Image from './Image';
import PropTypes from 'prop-types';

const Fill = (props) => {
  return (
    <>
      <div className={props.display}>
        <form className='form' action='/signup' method='post'>
          <Label For='form--name' text=' Nombre completo' />
          <Input id='form--name' type='text' name='name' placeholder='Ej: Sally Jill' handleInfoUser={props.handleInfoUser} value={props.InputState.name} />

          <Label For='form--job' text='Puesto' />
          <Input id='form--job' type='text' name='job' placeholder='Ej: Front-end unicorn' handleInfoUser={props.handleInfoUser} value={props.InputState.job} />

          <Label For='form--img' text='Imagen de perfil' />
          <div className='form--file'>
            <Image handleImg={props.handleImg} photo={props.photo} />
          </div>

          <Label For='form--email' text='Email' />
          <Input id='form--email' type='email' name='email' placeholder='Ej: sally-hill@gmail.com' handleInfoUser={props.handleInfoUser} value={props.InputState.email} />

          <Label For='form--phone' text='Teléfono' />
          <Input id='form--phone' type='tel' name='phone' placeholder='555-55-55-55' handleInfoUser={props.handleInfoUser} value={props.InputState.phone} />

          <Label For='form--linkedin' text='Linkedin' />
          <Input id='form--linkedin' type='text' name='linkedin' placeholder='Ej: linkedin.com/in/sally.hill' handleInfoUser={props.handleInfoUser} value={props.InputState.linkedin} />

          <Label For='form--github' text='Github' />
          <Input id='form--github' type='text' name='github' placeholder='Ej: github.com/sally-hill' handleInfoUser={props.handleInfoUser} value={props.InputState.github} />
        </form>
      </div>
    </>
  );
};

export default Fill;
Fill.propTypes = {
  display: PropTypes.string,
  handleInfoUser: PropTypes.func,
  InputState: PropTypes.object,
  handleImg: PropTypes.func,
};
