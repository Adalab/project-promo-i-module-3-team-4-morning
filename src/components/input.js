import React from 'react';

class Input extends React.Component {
  render() {
    return <input className={this.props.className} id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} required />;
  }
}
export default Input;
