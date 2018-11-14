import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
import genericCodeImage from '../images/genericcodeimage.jpg';

const imgStyle = {
    zIndex: '-1',
    position: 'relative',
    width: '100%'
}

class Dashboard extends Component {

    render() {
        return(
            <Fragment>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <div>
                <img style={imgStyle} src={genericCodeImage}/>
                <h1>Hello, my name is Aaron Meade</h1>
                < NavBar/>
              </div>
            </Fragment>
        )
    }
}

export default Dashboard;