import React, { useState } from 'react';
import '../stylesheets/main.scss';
import Header from './header';
import Collapse from './collapse';
import Footer from './footer';
import Palettes from './Palettes';
import Card from './Card';
import Fill from './fill';
import Share from './Share';

function App() {
  const [palette, setPalette] = useState('1');
  const [iconStyle, setIconStyle] = useState('');

  const handlePalette1 = (id) => {
    setPalette(id);
  };

  let style;
  const handleCollapse1 = (id) => {
    console.log(id);
  };

  return (
    <div /* className="App" */>
      <Header />
      <main className='main'>
        <Card state={palette} />
        <section className='information'>
          <Collapse close={style} name={iconStyle} id='collapse-1' title='Diseña' icon='far fa-object-ungroup' handleCollapse={handleCollapse1}>
            <Palettes handleChange={handlePalette1} />
          </Collapse>
          <Collapse id='collapse-2' title='Rellena' icon='far fa-keyboard' handleCollapse={handleCollapse1}>
            <Fill></Fill>
          </Collapse>
          <Collapse id='collapse-3' title='Comparte' icon='fas fa-share-alt' handleCollapse={handleCollapse1}>
            <Share />
          </Collapse>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
