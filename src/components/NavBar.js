
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
    color: 'black',
    display: 'block',
    transition: '0.3s',
    padding: '5px',
    paddingLeft: '8px',
    textDecoration: 'none'
}

const hiddenStyle = {
    color: 'blue',
}

class NavBar extends Component {

    state = {
        showProjects: false,
        showAbout: false,
    }

    projectInfo = () => {
        this.setState({ showProjects: true });
    }
    aboutInfo = () => {
        this.setState({ showAbout: true });
    }
    hideProject = () => {
        this.setState({ showProjects: false });
    }
    hideAbout = () => {
        this.setState({ showAbout: false });
    }

    render() {
        return (
            <div style={navDiv}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <NavLink style={textStyle} onMouseEnter={this.projectInfo} onMouseLeave={this.hideProject} class='fa fa-code'to='/projects'>{this.state.showProjects && <p style={hiddenStyle} >INFO</p> }</NavLink>
                <NavLink style={textStyle} onMouseEnter={this.aboutInfo} onMouseLeave={this.hideAbout} class='fa fa-search' to='/about'>{this.state.showAbout && <p style={hiddenStyle} >INFO</p> }</NavLink>
                <li><a style={textStyle} href="https://github.com/aaronmeade92" class="fa fa-github"></a></li>
                <li><a style={textStyle} href="https://www.linkedin.com/in/aaron-meade/" class="fa fa-linkedin"></a></li>

            </div>
        );
    }
}

export default NavBar;