import React from 'react';
import {
  Link
} from 'react-router-dom'
import { Nav, NavbarToggler, NavbarBrand, Collapse, Navbar, NavItem, NavLink } from 'reactstrap';
import Layout from './Layout';
import Blog from './Blog';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('menudbar')
    return (
      <div>
          <div>
            <Navbar toggleable className="my-2 my-lg-0">
              <Nav className="ml-auto" right navbar>
                <NavItem>
                  <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/blog">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/calendar">Calendar</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>
      </div>
    );
  }
}

export default MenuBar;
