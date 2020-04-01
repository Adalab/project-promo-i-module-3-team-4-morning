import React from 'react';
import '../stylesheets/main.scss';
import Header from './header';
import Collapse from './collapse';
import Footer from './footer';

function App() {
  return (
    <div /* className="App" */>
      <Header />
      <Collapse title='Diseña' />
      <Collapse title='Rellena' />
      <Collapse title='Comparte' icon='fas fa-share-alt' />
      <Footer />
    </div>
  );
}

export default App;
