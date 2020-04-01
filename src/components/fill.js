import React from 'react';

const Fill = props => {
  return (
    <section class='section--fill'>
      <div class='js-fill--div'>
        {/* <!-- Formulario --> */}
        <form class='js-form form' action='/signup' method='post'>
          {/* <!-- Nombre --> */}
          <label for='form--name'>
            Nombre completo <span class='form-object'> *</span>
          </label>
          <input class='js-fill-name' id='form--name' type='text' name='form--name' placeholder='Ej: Sally Jill' required />
          {/* <!-- Puesto --> */}
          <label for='form--job'>
            Puesto <span class='form-object'> *</span>
          </label>
          <input class='js-fill-job' id='form--job' type='text' name='form--job' placeholder='Ej: Front-end unicorn' required />
          {/* <!-- Boton para subir imagen --> */}
          <label for='form--img'>
            Imagen de perfil<span class='form-object'> *</span>
          </label>
          <div class='form--file'>
            <input class='form--file__input js-fill-file' type='file' accept='image/png, .jpeg, .jpg, image/gif' />
          </div>
          <div class='form--button__container'>
            <button class='form--button'>Añadir imagen</button>
            <span class='form--button__box'></span>
          </div>

          {/* <!-- Correo electronico --> */}
          <label for='form--email'>
            Email <span class='form-object'> *</span>
          </label>
          <input class='js-fill-email' type='email' id='form--email' name='form--email' placeholder='Ej: sally-hill@gmail.com' required />
          {/* <!-- Telefono --> */}
          <label for='form--phone'>
            Teléfono <span class='form-object'> *</span>
          </label>
          <input class='js-fill-tel' type='tel' id='form--phone' name='form--phone' placeholder='555-55-55-55' required />
          {/* <!-- Linkedin --> */}
          <label for='form--linkedin'>
            Linkedin <span class='form-object'> *</span>
          </label>
          <input class='js-fill-linkedin' id='form--linkedin' type='text' name='form--linkedin' placeholder='Ej: linkedin.com/in/sally.hill' required />
          <label for='form--job'>
            Github<span class='form-object'> *</span>
          </label>
          <input class='js-fill-github' id='form--github' type='text' name='form--github' placeholder='Ej: @sally-hill' required />
        </form>
      </div>
    </section>
  );
};

export default Fill;
