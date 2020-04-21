import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  handleInfoUser = (ev) => {
    const name = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    this.props.handleInfoUser(name, value);
  };

  render() {
    return <input className={this.props.className} id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleInfoUser} required />;
  }
}
export default Input;
Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleInfoUser: PropTypes.func,
};
