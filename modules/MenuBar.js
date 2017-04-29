import React from 'react';
import Link from 'next/link';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: "",
    }
  }
  clearer(width) {
    let clear = "";
    if (window.innerWidth < 700){
      clear = "clear";
    }
    this.setState({
      clear,
    });
  }
  componentDidMount() {
    window.addEventListener("resize", this.clearer.bind(this));
  }
  render() {
    return (
      <ul className={`MenuBar ${this.state.clear}`}>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>About</li>
        <li>
          <Link href="/calendar">Events</Link>
        </li>
        <li>Get Invovled</li>
        <li>Minutes and Bylaws</li>
      </ul>
    );
  }
}

export default MenuBar;
