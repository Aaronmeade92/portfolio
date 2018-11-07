import React, { Component } from 'react';


const projectsText = {
    textAlign: "center",
}

const projectLinks = {
    color: "#61dafb",
}

class ChewsItData extends Component {
    render() {
        return (
            <div>
                <h2><a style={projectLinks} href="https://github.com/Chewsit/chewsit-client">Chews It</a></h2>
                <p style={projectsText}>'Chews It' was an App that I had the priviledge to be a part of during my time at Code Fellows. 'Chews It' is designed to help the indecisive pick a meal for the night. 'Chews It' picks from preferences that the user is prompted to pick when they sign up for the app. It takes the three of the preferences and randomly selects a nearby restuarant. 'Chews It' utilizes Google Maps API and Yelp API .   </p>
            </div>
        );
    }
}

export default ChewsItData;