import React from 'react';

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
        <li>Blog</li>
        <li>About</li>
        <li>Events</li>
        <li>Get Invovled</li>
        <li>Minutes and Bylaws</li>
      </ul>
    );
  }
}

export default MenuBar;
