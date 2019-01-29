import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
import portfolioBackground from '../images/portfolioBackground.jpg';
import { NavLink } from 'react-router-dom';



const imgStyle = {
    zIndex: '',
    position: 'relative',
    width: '100%',
}

const container = {
    position: 'relative',
    textAlign: 'center',
}

const textStyle = {
    position: 'absolute',
    top: '40%',
    bottom: '50%',
    paddingLeft: '25%',
    color: 'white'
}

const buttonPosition = {
    position: 'absolute',
    top: '70%',
    bottom: '20%',
    }

const linkStyle = {
    textDecoration: 'none',
    color: 'orange',
}
class Dashboard extends Component {


    render() {
        return(
            <Fragment>
            <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/bttn.css/0.2.4/bttn.css"/>
              <div style={container}>
                <img style={imgStyle} src={portfolioBackground}/>
                <h1 style={textStyle}>Hello, my name is <NavLink style={linkStyle} to='/about'>Aaron Meade</NavLink></h1>
              </div>
                <NavLink style={buttonPosition} to='/projects'><button class='bttn-fill bttn-success'>Go To Projects</button></NavLink>
            </Fragment>
        )
    }
}

export default Dashboard;