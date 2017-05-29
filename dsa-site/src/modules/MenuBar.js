import React from 'react';
import { Nav, NavbarToggler, NavbarBrand, Collapse, Navbar, NavItem, NavLink } from 'reactstrap';
class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar toggleable className="my-2 my-lg-0">
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
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
