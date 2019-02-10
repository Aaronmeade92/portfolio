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
    paddingTop: '10%',
    color: 'white'
}

const body = {
    width: '100%',
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: 'black',
}

const aboutText = {
    paddingLeft: '2em',
    paddingRight: '2em',
}

class About extends Component {

    render() {
        
        return (
            <Fragment>
            <img style={dogPicture} src={spaceDoggy}></img>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <NavBar />
                    <div style={title}>
                        <h1>Front-end Developer</h1>
                        <p>Always looking to learn.</p>
                        <h3>
                            Hi, I'm Aaron. Nice to meet you!
                        </h3>
                    </div>
                    <div style={body}>
                        <p style={aboutText}>My road to code did not start vert traditionally, I really hadn't even seen what code looked like until about 2016. I attended the CodeFellows Bootcamp in Seattle, WA and graduated with a certificate in FullStack JavaScript Development. My main focus recently has been building out smooth front-ends using React. </p>
                    </div>

            </Fragment>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
