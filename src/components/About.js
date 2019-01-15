import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';
import PersonalPicture from '../images/personalPicture.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
    root: {
        width: '80%',
        paddingBottom: '10%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        backgroundColor: 'blue'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

const pictureSize = {
    width: '30%',
    paddingTop: '5em'
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
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <NavBar />
            <div className={classes.root}>
            <img style={pictureSize} src={PersonalPicture}/>
            <ExpansionPanel expanded={ expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<Icon>keyboard_arrow_down</Icon>}>
                    <Typography className={classes.heading}>Hello!</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        First off thanks for taking the time to look over my portfolio! As you can see my name is Aaron Meade and I am a full stack javascript developer. I graduated from the Code Fellows bootcamp out of Seatte, WA in September of 2018. I'm still fairly new to the world of code but have loved every minute of it. I have a genuine intellectual drive to learn more and more everyday. Feel free to reach out to me on any of my platforms that I have linked to my portfolio, I am always open to new and exciting opportunities  
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={ expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                <ExpansionPanelSummary expandIcon={<Icon>keyboard_arrow_down</Icon>}>
                    <Typography className={classes.heading}>My Journey</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        My journey as a developer is not a traditional one, I was only introduced to code in 2016 and before then it might as well have been the Matrix. Before I started on this path I had many different jobs that all showed me that I did not want to do them for the rest of my life. The one job that I really loved was being a high school football coach. I am a former athlete and loved to opportunity to help others grow and not only become better football players but better men. It really was a great leadership opportunity and an all around learning experience. I really look forward to taking all of my life's lessons and applying them to any future project that I am lucky enough to be a part of. 
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={ expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<Icon>keyboard_arrow_down</Icon>}>
                    <Typography className={classes.heading}>My Free Time</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Whenever I am not coding, I really like to spend time with my friends and family. Nothing is more important to me than the people I have surrounded myself with over the years and I have made it my life's goal to take care of them.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>
            </Fragment>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(About);
