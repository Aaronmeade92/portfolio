import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';


const navDiv = {
    height: '100%',
    width: '20%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    overFlowX : 'hidden',
    paddingTop: '60px',
    transition: '0.5s',
    paddingTop: '10%',
}
const textStyle = {
    color: 'black',
    display: 'flex',
    transition: '0.3s',
    paddingBottom: '5px',
    paddingLeft: '8px',
    textDecoration: 'none',
    justifyContent: 'flexStart',
    
}
const hiddenStyle = {
    color: 'blue',
    fontSize: '.8em',
    display: 'flex',
    paddingLeft: '.5em',
}
const headerStyle = {
    width: '100%',
    height: '2.5em',
    backgroundColor: 'lightGrey',
    position: 'fixed',
    top: '0'
}
const headerText = {
    display: 'flex',
    justifyContent: 'spaceBetween',
    paddingTop: '.5em',
    paddingLeft: '.5em',
}

const homeButton = {
    position: 'fixed',
    top: '0',
    right: '0',
    paddingTop: '1.1%',
    paddingRight: '1.1%',
    fontSize: '1.3em',
}
class NavBar extends Component {

    state = {
        showProjects: false,
        showAbout: false,
        showGithub: false,
        showLinkedin: false,
    }

    // REFACTOR
    projectInfo = () => {
        this.setState({ showProjects: true });
    }
    aboutInfo = () => {
        this.setState({ showAbout: true });
    }
    githubInfo = () => {
        this.setState({ showGithub: true });
    }
    linkedinInfo = () => {
        this.setState({ showLinkedin: true });
    }
    // REFACTOR
    hideProject = () => {
        this.setState({ showProjects: false });
    }
    hideAbout = () => {
        this.setState({ showAbout: false });
    }
    hideGithub = () => {
        this.setState({ showGithub: false });
    }
    hideLinkedin = () => {
        this.setState({ showLinkedin: false });
    }

    render() {
        return (
            <Fragment>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <div style={headerStyle}>
                    <nav class="navbar navbar-light bg-light">
                        <span class="navbar-brand mb-0 h1" style={headerText}>Aaron Meade </span>
                        <NavLink to='/'><Icon style={homeButton}>home</Icon></NavLink>
                    </nav>
                    
                </div>

                <div style={navDiv}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                    <NavLink style={textStyle} onMouseEnter={this.projectInfo} onMouseLeave={this.hideProject} class='fa fa-code'to='/projects'>{this.state.showProjects && <p style={hiddenStyle} >My Projects</p> }</NavLink>
                    <NavLink style={textStyle} onMouseEnter={this.aboutInfo} onMouseLeave={this.hideAbout} class='fa fa-search' to='/about'>{this.state.showAbout && <p style={hiddenStyle} >About Me</p> }</NavLink>
                    <li><a style={textStyle} onMouseEnter={this.githubInfo} onMouseLeave={this.hideGithub} href="https://github.com/aaronmeade92" class="fa fa-github">{this.state.showGithub && <p style={hiddenStyle} >My code</p> }</a></li>
                    <li><a style={textStyle} onMouseEnter={this.linkedinInfo} onMouseLeave={this.hideLinkedin} href="https://www.linkedin.com/in/aaron-meade/" class="fa fa-linkedin">{this.state.showLinkedin && <p style={hiddenStyle} >My LinkedIn</p> }</a></li>

                </div>
            </Fragment>
        );
    }
}

export default NavBar;