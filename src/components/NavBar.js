import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { NavBar } from 'react-bootstrap';

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
  </Nav>
</Navbar>;

export default NavBar;