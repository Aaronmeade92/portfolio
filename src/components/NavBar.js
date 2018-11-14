
import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

const navDiv = {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    overFlowX : 'hidden',
    paddingTop: '60px',
    transition: '0.5s',
}
const textStyle = {
    color: 'blue',
    display: 'block',
    transition: '0.3s',
    padding: '5px',
    paddingLeft: '8px'
    
}

const active = {
    textDecoration: 'none',
}

class NavBar extends Component {
    render() {
        return (
            <div style={navDiv}>
                {/* <NavLink style={navStyle} activeStyle={active} to='/home'>Home</NavLink> */}
                <NavLink style={textStyle} activeStyle={active} to='/projects'>Projects</NavLink>
                <NavLink style={textStyle} activeStyle={active} to='/about'>About</NavLink>
                <li><a style={textStyle} href="https://github.com/aaronmeade92" class="fa fa-github"></a></li>
                <li><a style={textStyle} href="https://www.linkedin.com/in/aaron-meade/" class="fa fa-linkedin"></a></li>

            </div>
        );
    }
}

export default NavBar;