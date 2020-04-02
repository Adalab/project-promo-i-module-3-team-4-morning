import React from 'react';
import Radio from './Palettes-radio';

const Palettes = props => {
  return (
    <section className="design">
      <div className="design--container__2">
        <p className="design--subtitle">Colores</p>
        <form className="js-form design--form" action="" method="GET">
          <Radio />
          <Radio />
          <Radio />
        </form>
      </div>
    </section>
  );
};

export default Palettes;
