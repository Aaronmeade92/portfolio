
import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

const navStyle = {
    padding: '3px',
    textAlign: 'center',
}

const navDiv = {
    textAlign: 'center',
}
const active = {
    textDecoration: 'none',
}

class NavBar extends Component {
    render() {
        return (
            <div style={navDiv}>
                <NavLink style={navStyle} activeStyle={active} to='/home'>Home</NavLink>
                <NavLink style={navStyle} activeStyle={active} to='/projects'>Projects</NavLink>
                <NavLink style={navStyle} activeStyle={active} to='/about'>About</NavLink>
            </div>
        );
    }
}

export default NavBar;