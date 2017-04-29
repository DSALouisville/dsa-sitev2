import React from 'react';
import ReactDOM from 'react-dom';

class Logo extends React.Component {
  render() {
    return (
      <div className={`Logo ${this.props.className}`}>
        <img src="/static/logo-rough.png"></img>
      </div>
    )
  }
}

export default Logo;
