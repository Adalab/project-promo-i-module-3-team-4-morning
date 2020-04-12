import React from 'react';
import '../stylesheets/main.scss';
import Header from './header';
import Collapse from './collapse';
import Footer from './footer';
import Palettes from './Palettes';
import Card from './Card';
import Fill from './fill';
import Share from './Share';
import defaultImage from '../images/preview-photo.jpg';

// function App() {
//   const [palette, setPalette] = useState('1');
//   const [img, setImg] = useState(defaultImage);
//   const handlePalette1 = (id) => {
//     setPalette(id);
//   };
//   const handleImg = (img) => {
//     setImg(img);
//   };
//   return (
//     <div /* className="App" */>
//       <Header />
//       <main className='main'>
//         <Card statePalette={palette} stateImg={img} handleImg={handleImg} />
//         <Collapse title='Diseña' icon='far fa-object-ungroup' />
//         <Palettes handleChange={handlePalette1} />
//         <Collapse title='Rellena' icon='far fa-keyboard'>
//           <Fill handleImg={handleImg}></Fill>
//         </Collapse>
//         <Collapse title='Comparte' icon='fas fa-share-alt'>
//           <Share />
//         </Collapse>
//       </main>
//       <Footer />
//     </div>
//   );
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: '1',
      arrow1: '',
      arrow2: 'closed',
      arrow3: 'closed',
      colStyle1: '',
      colStyle2: 'hidden',
      colStyle3: 'hidden',
      name: '',
      job: '',
      phone: '',
      img: defaultImage,
      email: '',
      linkedin: '',
      github: '',
    };
    this.handlePalette1 = this.handlePalette1.bind(this);
    this.handleCollapse1 = this.handleCollapse1.bind(this);
    this.handleCollapse2 = this.handleCollapse2.bind(this);
    this.handleCollapse3 = this.handleCollapse3.bind(this);
    this.handleInfoUser = this.handleInfoUser.bind(this);
    this.handleImg = this.handleImg.bind(this);
  }
  handlePalette1 = (id) => {
    this.setState({
      palette: id,
    });
  };

  handleCollapse1 = (id) => {
    this.setState((prevState, props) => {
      let style;
      if (prevState.arrow1 === '') {
        style = 'closed';
      } else {
        style = '';
      }
      return { arrow1: style };
    });

    this.setState((prevState, props) => {
      let style;
      if (prevState.colStyle1 === '') {
        style = 'hidden';
      } else {
        style = '';
      }
      return { colStyle1: style };
    });
  };

  handleCollapse2 = (id) => {
    this.setState((prevState, props) => {
      let style;
      if (prevState.arrow2 === '') {
        style = 'closed';
      } else {
        style = '';
      }
      return { arrow2: style };
    });
    this.setState((prevState, props) => {
      let style;
      if (prevState.colStyle2 === '') {
        style = 'hidden';
      } else {
        style = '';
      }
      return { colStyle2: style };
    });
  };
  handleCollapse3 = (id) => {
    this.setState((prevState, props) => {
      let style;
      if (prevState.arrow3 === '') {
        style = 'closed';
      } else {
        style = '';
      }
      return { arrow3: style };
    });
    this.setState((prevState, props) => {
      let style;
      if (prevState.colStyle3 === '') {
        style = 'hidden';
      } else {
        style = '';
      }
      return { colStyle3: style };
    });
  };
  handleInfoUser = (name, value) => {
    // const { name, value } = ev;
    this.setState({ [name]: value });
  };

  handleImg = (img) => {
    this.setState({ img });
  };

  render() {
    return (
      <div>
        <Header />
        <main className='main'>
          <Card stateImg={this.state.img} statePalette={this.state.palette} InputState={this.state} />
          <section className='information'>
            <Collapse close={this.state.arrow1} id='collapse-1' title='Diseña' icon='far fa-object-ungroup' handleCollapse={this.handleCollapse1}>
              <Palettes handleChange={this.handlePalette1} display={this.state.colStyle1} />
            </Collapse>
            <Collapse close={this.state.arrow2} id='collapse-2' title='Rellena' icon='far fa-keyboard' handleCollapse={this.handleCollapse2}>
              <Fill handleImg={this.handleImg} display={this.state.colStyle2} handleInfoUser={this.handleInfoUser} InputState={this.state}></Fill>
            </Collapse>
            <Collapse close={this.state.arrow3} id='collapse-3' title='Comparte' icon='fas fa-share-alt' handleCollapse={this.handleCollapse3}>
              <Share display={this.state.colStyle3} />
            </Collapse>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
