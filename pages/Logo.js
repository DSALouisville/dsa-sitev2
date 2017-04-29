import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

class Logo extends React.Component {
  render() {
    return (
      <div className={`Logo ${this.props.className}`}>
        <Link href="/">
          <img src="/static/logo-rough.png"></img>
        </Link>
      </div>
    )
  }
}

export default Logo;
