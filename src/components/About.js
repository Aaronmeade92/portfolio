import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import spaceDoggy from '../images/SpaceDoggy.jpg';

const styles = theme => ({
    root: {
        width: '80%',
        
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        backgroundColor: ''
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});


const dogPicture = {
    width: '100%',
    position: 'fixed',
    left: '0',
    bottom: '0',
    zIndex: '-1',
}

const title = {
    padding: '10%',
    color: 'white'
}

const parentDiv = {
    width: '90%'

}

const body = {
    float: 'left',
    width: '25%',
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: 'black',
    padding: '3%',
}

const aboutText = {
    paddingLeft: '2em',
    paddingRight: '2em',
    textAlign: 'left',
}

class About extends Component {

    render() {
        
        return (
            <Fragment>
            <img style={dogPicture} src={spaceDoggy}></img>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <a href="https://icons8.com/icon/46588/hamburger"></a>
            <NavBar />
                    <div style={title}>
                        <h1>Front-end Developer</h1>
                        <p>Always looking to learn.</p>
                    </div>
                    <div style={parentDiv}>    
                        <div style={body}>
                            <p style={aboutText}>Background</p>
                        </div>
                        <div style={body}>
                            <p style={aboutText}>Goals</p>
                        </div>
                        <div style={body}>
                            <p style={aboutText}>Hobbies </p>
                        </div>
                    </div>

            </Fragment>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
