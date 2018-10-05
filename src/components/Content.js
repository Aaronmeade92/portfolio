import React, {Fragment,Component} from 'react';

const projects = {
    textAlign: "left",
    paddingLeft: "5%"
}


class Content extends Component {


    render() {
        return ( 
        <Fragment >
            <p> Welcome to my professional portfolio! Here you can find links to all of my social media platforms and some examples of what makes me a great frontend developer.
            </p> 
            <div className="projects">
            <h2 style={projects}><a href="https://github.com/Chewsit/chewsit-client">Chews It</a></h2>
            <p>'Chews It' was an App that had a priviledge to be a part of during my time at Code Fellows. Chews It is designed to help the indecisive pick a meal for the night. Chews It picks from preferences that the user is prompted to pick when they sign up for the app. It takes the three of the preferences and randomly selects a nearby restuarant. Chews It utilizes Google Maps API and Yelp API .   </p>

            <h2 style={projects}><a href="https://github.com/code-commando/frontend">Code Commando</a></h2>
            <p>Code Commando was the largest project I have been a part of, it was a combined effort of all the developers in my 401 JavaScript course at Code Fellows. My team's job was to build the entire frontend. I personally had input on all the pages and built the rosters and quiz pages.</p>
            </div>
        </Fragment>
        )
    }
}

export default Content;