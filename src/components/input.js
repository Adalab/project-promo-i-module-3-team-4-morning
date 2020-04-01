import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input className={this.props.class} id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} required />;
  }
}
export default Input;
