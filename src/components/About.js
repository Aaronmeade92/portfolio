import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Link, animateScroll as scroll } from 'react-scroll';

import spaceDoggy from '../images/SpaceDoggy.jpg';
import personalPicture from '../images/personalPicture.jpg';

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

const picture = {
    width: '20%',
    float: 'left',
    padding: '5%',
}

const title = {
    padding: '10%',
    color: 'white',
    textAlign: 'center',
}

const parentDiv = {
    width: '90%',
    paddingBottom: '20%',
}

const body = {
    float: 'left',
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: 'black',
    padding: '3%',
}

const aboutText = {
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '20%',
    paddingBottom: '10%',
    textAlign: 'left',

}

const buttonStyle = {

}
class About extends Component {


    render() {
        
        return (
            <Fragment>
            <img style={dogPicture} src={spaceDoggy}></img>
            <NavBar />
            <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/bttn.css/0.2.4/bttn.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>

                    <div style={title}>
                        <h1>Front-end Developer</h1>
                        <p>Always looking to learn.</p>
                    </div>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration= {600}
                    >
                    <button class="bttn-material-flat bttn-md" style={buttonStyle}><i class="fas fa-chevron-down"></i></button>
                    </Link>
                    
                    <div className='section1' style={aboutText}>
                        <div style={parentDiv}>
                            <div style={body}>
                                <img style={picture} src={personalPicture}></img>
                                <h3>About Me</h3>
                                <p>With a diverse background in jobs that have not meant a lot to me, I feel that I have really found a passion with Front-End development and am really driven to learn and become a better developer.</p>
                                <h3>Skills</h3>
                                <p>React. HTML. CSS. SQL. Node.Js. jQuery.</p>
                            </div>
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

{/* <div style={parentDiv}>    
    <div style={body}>
        <h3 style={aboutText}>Hobbies </h3>
        <p>Amateur Chef.</p> 
        <p>Part-Time Crossfitter.</p>
        <p>Gamer.</p>
    </div>
    <div style={body}>
        <h3 style={aboutText}>Goals</h3>
        <p>With a background mostly in manual labor I have worked hard to change my career path. Very motivated in my pursuit to better myself and embark a new adventure.</p>
    </div>
    <div style={body}>
        <h3>Skills</h3>
        <p>React</p>
        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>
    </div>
</div> */}