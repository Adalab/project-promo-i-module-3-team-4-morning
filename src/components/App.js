import React from 'react';
import '../stylesheets/main.scss';
import Header from './header';
import Collapse from './collapse';
import Footer from './footer';
import Palettes from './Palettes';

function App() {
  return (
    <div /* className="App" */>
      <Header />
      <Collapse title="Diseña" icon="far fa-object-ungroup" />
      <Palettes />
      <Collapse title="Rellena" />
      <Collapse title="Comparte" icon="fas fa-share-alt" />
      <Footer />
    </div>
  );
}

export default App;
