import React from 'react';
import Input from './input';
import Label from './label';
const Fill = props => {
  return (
    <section className='section--fill'>
      <div className='js-fill--div'>
        {/* <!-- Formulario --> */}
        <form className='js-form form' action='/signup' method='post'>
          {/* <!-- Nombre --> */}
          <Label For='form--name' text=' Nombre completo' />

          <Input id='form--name' type='text' name='form--name' placeholder='Ej: Sally Jill' />

          {/* <!-- Puesto --> */}
          <label htmlFor='form--job'>
            Puesto <span className='form-object'> *</span>
          </label>
          <Input id='form--job' type='text' name='form--job' placeholder='Ej: Front-end unicorn' />

          {/* <!-- Boton para subir imagen --> */}
          <label htmlFor='form--img'>
            Imagen de perfil<span className='form-object'> *</span>
          </label>
          <div className='form--file'>
            <Input className='form--file__input' type='file' name='form--job' />
            {/* <input className='form--file__input js-fill-file' type='file' accept='image/png, .jpeg, .jpg, image/gif' /> */}
          </div>
          <div className='form--button__container'>
            <button className='form--button'>Añadir imagen</button>
            <span className='form--button__box'></span>
          </div>

          {/* <!-- Correo electronico --> */}
          <label htmlFor='form--email'>
            Email <span className='form-object'> *</span>
          </label>
          <Input id='form--email' type='email' name='form--email' placeholder='Ej: sally-hill@gmail.com' />

          {/* <!-- Telefono --> */}
          <label htmlFor='form--phone'>
            Teléfono <span className='form-object'> *</span>
          </label>
          <Input id='form--phone' type='tel' name='form--phone' placeholder='555-55-55-55' />

          {/* <!-- Linkedin --> */}
          <label htmlFor='form--linkedin'>
            Linkedin <span className='form-object'> *</span>
          </label>
          <Input id='form--linkedin' type='text' name='form--linkedin' placeholder='Ej: linkedin.com/in/sally.hill' />

          <label htmlFor='form--job'>
            Github<span className='form-object'> *</span>
          </label>
          <Input id='form--github' type='text' name='form--github' placeholder='Ej: github.com/sally-hill' />
        </form>
      </div>
    </section>
  );
};

export default Fill;
