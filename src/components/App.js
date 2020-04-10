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
  const handleCollapse1 = (id) => {
    setIconStyle('closed');
  };
  const handleCollapse2 = (id) => {
    setIconStyle('closed');
  };
  const handleCollapse3 = (id) => {
    setIconStyle('closed');
  };
  console.log('state:' + iconStyle);
  return (
    <div /* className="App" */>
      <Header />
      <main className='main'>
        <Card state={palette} />
        <section className='information'>
          <Collapse close={iconStyle} id='collapse-1' title='Diseña' icon='far fa-object-ungroup' handleCollapse={handleCollapse1}>
            <Palettes handleChange={handlePalette1} />
          </Collapse>
          <Collapse close={iconStyle} id='collapse-2' title='Rellena' icon='far fa-keyboard' handleCollapse={handleCollapse2}>
            <Fill></Fill>
          </Collapse>
          <Collapse close={iconStyle} id='collapse-3' title='Comparte' icon='fas fa-share-alt' handleCollapse={handleCollapse3}>
            <Share />
          </Collapse>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
