import React from 'react';
import { Nav, NavbarToggler, NavbarBrand, Collapse, Navbar, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../static/main.css';
import Link from 'next/link';
class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar toggleable>
          <div className="pull-right">
            <Nav className="ml-auto" right navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calendar">Calendar</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
