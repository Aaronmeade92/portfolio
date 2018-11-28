import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';


const textStyle = {
    paddingLeft: "2em",
    paddingRight: "1em",
    paddingBottom: "1%",
}

class About extends Component {
    render() {
        return (
            <Fragment>
            <NavBar />
            <div>
                <p style={textStyle}> Welcome to my professional portfolio! <br/> Here you can find links to all of my social media platforms and some examples of what makes me a great frontend developer.</p>
            </div>
            </Fragment>
        );
    }
}

export default About;