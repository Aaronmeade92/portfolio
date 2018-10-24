import React, {Fragment,Component} from 'react';


const projects = {
    textAlign: "left",
    padding: "5%"
}

const projectsText = {
    textAlign: "center",
}

const projectLinks = {
    color: "#61dafb",
}

class Content extends Component {


    render() {
        return ( 
        <Fragment>
            <div style={projects}> 
            <div>
            <h2><a style={projectLinks} href="https://github.com/Chewsit/chewsit-client">Chews It</a></h2>
            <p style={projectsText}>'Chews It' was an App that I had the priviledge to be a part of during my time at Code Fellows. 'Chews It' is designed to help the indecisive pick a meal for the night. 'Chews It' picks from preferences that the user is prompted to pick when they sign up for the app. It takes the three of the preferences and randomly selects a nearby restuarant. 'Chews It' utilizes Google Maps API and Yelp API .   </p>

            <h2><a style={projectLinks} href="https://github.com/code-commando/frontend">Code Commando</a></h2>
            <p style={projectsText}>'Code Commando' was the largest project I have been a part of, it was a combined effort of all the developers in my 401 JavaScript course at Code Fellows. My team's job was to build the entire frontend. I personally had input on all the pages and built the rosters and quiz pages.</p>

            <h2><a style={projectLinks} href="https://star-wars-study.herokuapp.com/home">Star Wars Study</a></h2>
            <p style={projectsText}>A basic React frontend built using the data provided through the Star Wars API.</p>
            </div>
            </div>
        </Fragment>
        )
    }
}

export default Content;