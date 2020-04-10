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
  const handlePalette1 = (id) => {
    setPalette(id);
  };
  console.log('state:' + palette);
  return (
    <div /* className="App" */>
      <Header />
      <main className='main'>
        <Card state={palette} />
        <section className='information'>
          <Collapse title='Diseña' icon='far fa-object-ungroup' />
          <Palettes handleChange={handlePalette1} />
          <Collapse title='Rellena' icon='far fa-keyboard'>
            <Fill></Fill>
          </Collapse>
          <Collapse title='Comparte' icon='fas fa-share-alt'>
            <Share />
          </Collapse>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
