import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../img/logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className={`Logo ${this.props.className}`}>
        <img src={logo}></img>
      </div>
    )
  }
}

export default Logo;
