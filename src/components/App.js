import React, { useState } from 'react';
import '../stylesheets/main.scss';
import Header from './header';
import Collapse from './collapse';
import Footer from './footer';
import Palettes from './Palettes';
import Card from './Card';
import Fill from './fill';
import Share from './Share';
import defaultImage from '../images/preview-photo.jpg';

function App() {
  const [palette, setPalette] = useState('1');
  const [img, setImg] = useState(defaultImage);
  const handlePalette1 = (id) => {
    setPalette(id);
  };
  const handleImg = (img) => {
    setImg(img);
  };
  return (
    <div /* className="App" */>
      <Header />
      <main className='main'>
        <Card statePalette={palette} stateImg={img} handleImg={handleImg} />
        <Collapse title='Diseña' icon='far fa-object-ungroup' />
        <Palettes handleChange={handlePalette1} />
        <Collapse title='Rellena' icon='far fa-keyboard'>
          <Fill handleImg={handleImg}></Fill>
        </Collapse>
        <Collapse title='Comparte' icon='fas fa-share-alt'>
          <Share />
        </Collapse>
      </main>
      <Footer />
    </div>
  );
}

export default App;
