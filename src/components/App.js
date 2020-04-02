import React from 'react';
import '../stylesheets/main.scss';
import Header from './header';
import Collapse from './collapse';
import Card from './Card';
import Footer from './footer';
import Fill from './fill';

function App() {
  return (
    <div /* className="App" */>
      <Header />
      <Card />
      <Collapse title='Diseña' />
      <Collapse title='Rellena' icon='far fa-keyboard'>
        <Fill></Fill>
      </Collapse>
      <Collapse title='Comparte' icon='fas fa-share-alt' />
      <Footer />
    </div>
  );
}

export default App;
