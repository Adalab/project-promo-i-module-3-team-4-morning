import React from 'react';
import Input from './input';
import defaultImage from '../images/preview-photo.jpg';
import PropTypes from 'prop-types';

const fr = new FileReader();
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      img: defaultImage,
    };
    this.handleImg = this.handleImg.bind(this);
    this.writeImg = this.writeImg.bind(this);
  }

  handleImg() {
    const myFile = this.fileInput.current.files[0];
    fr.addEventListener('load', this.writeImg);
    fr.readAsDataURL(myFile);
  }

  writeImg() {
    this.setState({
      img: fr.result,
    });
    this.props.handleImg(fr.result);
  }

  render() {
    return (
      <>
        <div className="form--file">
          <Input className="form--file__input" type="file" name="form--file" />
          <input onChange={this.handleImg} ref={this.fileInput} className="form--file__input js-fill-file" type="file" accept="image/png, .jpeg, .jpg, image/gif" />
        </div>
        <div className="form--button__container">
          <button className="form--button">Añadir imagen</button>
          <img src={this.state.img} className="form--button__box" alt="previsualización de la imagen" />
        </div>
      </>
    );
  }
}

export default Image;

Image.propTypes = {
  handleImg: PropTypes.func,
};
