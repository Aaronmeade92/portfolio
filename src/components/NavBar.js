import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navDiv = {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    backgroundColor: '#333',
    overflow: 'hidden',
    paddingRight: '35%',
    opacity: '.7',
}

const navItem = {
    display: 'inlineBlock',
    float: 'right',
    padding: '.3em',
    textAlign: 'center',
    color: 'white',
}

const active = {
    textDecoration: 'none',
}

class Navigation extends Component {
        render() {
            return(
            <div style={navDiv}>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/" style={navItem} activeStyle={active}>Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
        
                    <NavLink style={navItem} activeStyle={active} to='/projects'>Projects</NavLink>
                    <NavLink style={navItem} activeStyle={active} to='/marketing'>Marketing</NavLink>
                    <NavLink style={navItem} activeStyle={active} to='/about'>About</NavLink>
                    
                </Nav>
            </Navbar>
            </div>
        )
    }
}

export default Navigation;