import React from 'react';
import Input from './input';
import Label from './label';
import Image from './Image';
const Fill = (props) => {
  console.log(props);

  return (
    <section className='section--fill'>
      <div className='js-fill--div'>
        {/* <!-- Formulario --> */}
        <form className='js-form form' action='/signup' method='post'>
          <Label For='form--name' text=' Nombre completo' />
          <Input handleImg={props.handleImg} id='form--name' type='text' name='form--name' placeholder='Ej: Sally Jill' />

          <Label For='form--job' text='Puesto' />
          <Input id='form--job' type='text' name='form--job' placeholder='Ej: Front-end unicorn' />

          <Label For='form--img' text='Imagen de perfil' />
          <Image handleImg={props.handleSubmit} />

          <Label For='form--email' text='Email' />
          <Input id='form--email' type='email' name='form--email' placeholder='Ej: sally-hill@gmail.com' />

          <Label For='form--phone' text='Teléfono' />
          <Input id='form--phone' type='tel' name='form--phone' placeholder='555-55-55-55' />

          <Label For='form--linkedin' text='Linkjedin' />
          <Input id='form--linkedin' type='text' name='form--linkedin' placeholder='Ej: linkedin.com/in/sally.hill' />

          <Label For='form--github' text='Github' />
          <Input id='form--github' type='text' name='form--github' placeholder='Ej: github.com/sally-hill' />
        </form>
      </div>
    </section>
  );
};

export default Fill;
