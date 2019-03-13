
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/main.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';



export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="port-navbar port-default" color="dark" light expand="md">
          <NavbarBrand className="brand" href="/">Storytime</NavbarBrand>
          <NavbarToggler/>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}