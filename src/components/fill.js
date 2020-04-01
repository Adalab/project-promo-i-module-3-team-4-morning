import React from 'react';
import Input from './input';
const Fill = props => {
  return (
    <section className='section--fill'>
      <div className='js-fill--div'>
        {/* <!-- Formulario --> */}
        <form className='js-form form' action='/signup' method='post'>
          {/* <!-- Nombre --> */}
          <label htmlFor='form--name'>
            Nombre completo <span className='form-object'> *</span>
          </label>
          <Input id='form--name' type='text' name='form--name' placeholder='Ej: Sally Jill' />
          <input className='js-fill-name' id='form--name' type='text' name='form--name' placeholder='Ej: Sally Jill' required />
          {/* <!-- Puesto --> */}
          <label htmlFor='form--job'>
            Puesto <span className='form-object'> *</span>
          </label>
          <input className='js-fill-job' id='form--job' type='text' name='form--job' placeholder='Ej: Front-end unicorn' required />
          {/* <!-- Boton para subir imagen --> */}
          <label htmlFor='form--img'>
            Imagen de perfil<span className='form-object'> *</span>
          </label>
          <div className='form--file'>
            <input className='form--file__input js-fill-file' type='file' accept='image/png, .jpeg, .jpg, image/gif' />
          </div>
          <div className='form--button__container'>
            <button className='form--button'>Añadir imagen</button>
            <span className='form--button__box'></span>
          </div>

          {/* <!-- Correo electronico --> */}
          <label htmlFor='form--email'>
            Email <span className='form-object'> *</span>
          </label>
          <input className='js-fill-email' type='email' id='form--email' name='form--email' placeholder='Ej: sally-hill@gmail.com' required />
          {/* <!-- Telefono --> */}
          <label htmlFor='form--phone'>
            Teléfono <span className='form-object'> *</span>
          </label>
          <input className='js-fill-tel' type='tel' id='form--phone' name='form--phone' placeholder='555-55-55-55' required />
          {/* <!-- Linkedin --> */}
          <label htmlFor='form--linkedin'>
            Linkedin <span className='form-object'> *</span>
          </label>
          <input className='js-fill-linkedin' id='form--linkedin' type='text' name='form--linkedin' placeholder='Ej: linkedin.com/in/sally.hill' required />
          <label htmlFor='form--job'>
            Github<span className='form-object'> *</span>
          </label>
          <input className='js-fill-github' id='form--github' type='text' name='form--github' placeholder='Ej: @sally-hill' required />
        </form>
      </div>
    </section>
  );
};

export default Fill;
