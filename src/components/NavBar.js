import React, { Component, Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navDiv = {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    backgroundColor: 'black',
    overflow: 'hidden',
    paddingRight: '5%',
}

const navItem = {
    display: 'inlineBlock',
    float: 'right',
    padding: '.3em',
    textAlign: 'right',
    color: 'white',
    textDecoration: 'none',
}

const active = {
    textDecoration: 'underline',
}

const navLinks = {
    display: 'inlineBlock',
    float: 'left',
    paddingLeft: '1.8em',
    textAlign: 'left',
    color: 'white',
}


class Navigation extends Component {

        render() {

            return(
            <Fragment>    
                <div style={navDiv}>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
                <Navbar>
                    <Nav>
                        <NavLink style={navItem} activeStyle={active} to='/projects'>Projects</NavLink>
                        <NavLink style={navItem} activeStyle={active} to='/about'>About</NavLink>
                        <NavLink style={navItem} activeStyle={active} to='/home'>Home</NavLink>
                        <a style={navLinks} href='https://github.com/aaronmeade92'><i class="fab fa-github"></i></a>
                        <a style={navLinks} href='https://www.linkedin.com/in/aaron-meade/'><i class="fab fa-linkedin"></i></a>
                    </Nav>
                </Navbar>
                </div>
            </Fragment>
        )
    }
}

export default Navigation;