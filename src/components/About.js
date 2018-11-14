import React, { Component } from 'react';


const textStyle = {
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1%",
}

class About extends Component {
    render() {
        return (
            <div>
                <p style={textStyle}> Welcome to my professional portfolio! <br/> Here you can find links to all of my social media platforms and some examples of what makes me a great frontend developer.</p>
            </div>
        );
    }
}

export default About;