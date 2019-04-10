import React, { Component, Fragment } from 'react';
import Navigation from './NavBar.js';

import starwarsstudy from '../images/starwars-study.jpg';
import chewsit from '../images/chewsit.jpg';
import spaceBackground from '../images/plainSpace.jpg';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

    const projectsText = {
        textAlign: "left",
        fontSize: '1em',
    }

    const projectLinks = {
        color: 'blue',
        textAlign: 'center',
    };

    const styles = theme => ({
        root: {
            width: '80%',
            paddingTop: '5%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    });

    const pictureSize = {
        width: '30%',
        padding: '2em',
        float: 'left',
    }

    const parentDiv = {
        padding: '2em',
        paddingLeft: '23%',
    }

    const imgStyle = {
        width: '100%',
        position: 'fixed',
        zIndex: '-1',
    }

    const header = {
        textAlign: 'center',
        color: 'white',
        padding: '3%',

    }
class About extends Component {
    state = {
        expanded: false,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        
        return (
            <Fragment>
            <img style={imgStyle} src={spaceBackground}/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Navigation />
            <div style={header}>
                <h3>Here you can find some of my previous projects. Always looking to build more and learn more.</h3>
            </div>
            <div style={parentDiv}>
                <div className={classes.root}>
                <ExpansionPanel expanded={ expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<Icon>keyboard_arrow_down</Icon>}>
                        <Typography className={classes.heading}>Star Wars Study</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <h2><a style={projectLinks} href="https://star-wars-study.herokuapp.com/home">Star Wars API</a></h2>
                            <p style={projectsText}><img style={pictureSize} src={starwarsstudy}/>A basic React frontend built using the data provided through the Star Wars API. You can find a list of all the characters, ships and films in the Star Wars universe. At least all the ones listed on the Star Wars API.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={ expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <ExpansionPanelSummary expandIcon={<Icon>keyboard_arrow_down</Icon>}>
                        <Typography className={classes.heading}>Chewsit</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <h2><a style={projectLinks} href="https://github.com/Chewsit/chewsit-client">Chews It</a></h2>
                            <img style={pictureSize} src={chewsit}/>
                            <p style={projectsText}>'Chews It' was an App that I had the honor to be a part of during my time at Code Fellows. 'Chews It' is designed to help the indecisive pick a meal for the night. 'Chews It' picks from preferences that the user is prompted to pick when they sign up for the app. It takes the three of the preferences and randomly selects a nearby restuarant. 'Chews It' utilizes Google Maps API and Yelp API .</p>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={ expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary expandIcon={<Icon>keyboard_arrow_down</Icon>}>
                        <Typography className={classes.heading}>Code Commando</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <h2><a style={projectLinks} href="">Pokemon Search</a></h2>
                            <p style={projectsText}>Pokemon Search was a fun side project that I built using the data provided by the PokeAPI. Some features of the app are a search bar that the user can use to search and find any and every pokemon in the API. The user will then be provided with that pokemon's type and stats.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
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