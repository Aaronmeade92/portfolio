import React, { Component } from 'react';


const projectsText = {
    textAlign: "center",
}

const projectLinks = {
    color: "#61dafb",
}

class StarWarsData extends Component {
    render() {
        return (
            <div>
                <h2><a style={projectLinks} href="https://star-wars-study.herokuapp.com/home">Star Wars Study</a></h2>
                <p style={projectsText}>A basic React frontend built using the data provided through the Star Wars API.</p>
            </div>
        );
    }
}

export default StarWarsData;