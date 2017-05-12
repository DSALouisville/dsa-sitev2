import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
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
      <div>
        <Navbar light toggleable >
          <Nav className="full-width" navbar>
            <NavItem>
              <Link href="/blog"><a>Blog</a></Link>
            </NavItem>
            <NavItem>
              <Link href=""><a>About</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/calendar"><a>Events</a></Link>
            </NavItem>
            <NavItem>
              <Link href=""><a>Get Involved</a></Link>
            </NavItem>
            <NavItem>
              <Link href=""><a>Minutes and Bylaws</a></Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
