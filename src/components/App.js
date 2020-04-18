import React from 'react';
import '../stylesheets/main.scss';
import Header from './Header';
import Collapse from './Collapse';
import Footer from './Footer';
import Palettes from './Palettes';
import Card from './Card';
import Fill from './Fill';
import Share from './Share';
import defaultImage from '../images/preview-photo.jpg';
import { PostDataToApi } from '../services/PostDataToApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardUrl: '',
      cardSuccess: '',
      cardErrorMessage: '',
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
      photo: defaultImage,
      email: '',
      linkedin: '',
      github: '',
    };
    this.handlePalette1 = this.handlePalette1.bind(this);
    this.handleCollapse1 = this.handleCollapse1.bind(this);
    this.handleCollapse2 = this.handleCollapse2.bind(this);
    this.handleCollapse3 = this.handleCollapse3.bind(this);
    this.handleInfoUser = this.handleInfoUser.bind(this);
    this.PostDataToApi = this.PostDataToApi.bind(this);
    this.handleImg = this.handleImg.bind(this);
  }

  PostDataToApi() {
    PostDataToApi(this.state)
      .then((result) => {
        console.log(result);
        this.setState({
          cardSuccess: result.success,
          cardUrl: result.cardURL || '',
          cardErrorMessage: result.error || '',
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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

  handleImg = (photo) => {
    this.setState({ photo });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <Header />
        <main className='main'>
          <Card stateImg={this.state.photo} statePalette={this.state.palette} InputState={this.state} />
          <section className='information'>
            <Collapse close={this.state.arrow1} id='collapse-1' title='Diseña' icon='far fa-object-ungroup' handleCollapse={this.handleCollapse1}>
              <Palettes handleChange={this.handlePalette1} display={this.state.colStyle1} />
            </Collapse>
            <Collapse close={this.state.arrow2} id='collapse-2' title='Rellena' icon='far fa-keyboard' handleCollapse={this.handleCollapse2}>
              <Fill handleImg={this.handleImg} display={this.state.colStyle2} handleInfoUser={this.handleInfoUser} InputState={this.state}></Fill>
            </Collapse>
            <Collapse close={this.state.arrow3} id='collapse-3' title='Comparte' icon='fas fa-share-alt' handleCollapse={this.handleCollapse3}>
              <Share display={this.state.colStyle3} url={this.state.cardUrl || this.state.cardErrorMessage} PostDataToApi={this.PostDataToApi} />
            </Collapse>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
