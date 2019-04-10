import React, { Fragment, Component } from 'react';
import portfolioBackground from '../images/spaceBackground.jpg';
import { NavLink } from 'react-router-dom';

// comments go here

const imgStyle = {
    zIndex: '',
    position: 'relative',
    width: '100%',
}

const textStyle = {
    position: 'absolute',
    top: '2%',
    bottom: '50%',
    left: '1%',
    color: 'white',
}

const buttonPosition = {
    position: 'absolute',
    top: '30%',
    left: '2%',
    }

const linkStyle = {
    textDecoration: 'none',
    color: 'red',
}
class Dashboard extends Component {


    render() {
        return(
            <Fragment>
            <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/bttn.css/0.2.4/bttn.css"/>
                <img style={imgStyle} src={portfolioBackground}/>
                <h1 style={textStyle}>Hello, my name is <NavLink style={linkStyle} to='/about'>Aaron Meade</NavLink></h1>
                <NavLink style={buttonPosition} to='/projects'><button class='bttn-fill bttn-primary'>Go To Projects</button></NavLink>
            </Fragment>
        )
    }
}

export default Dashboard;