import React, { Component } from 'react';


const projectsText = {
    textAlign: "center",
}

const projectLinks = {
    color: "#61dafb",
}

class CodeCommandoData extends Component {
    render() {
        return (
            <div>
                <h2><a style={projectLinks} href="https://github.com/code-commando/frontend">Code Commando</a></h2>
                <p style={projectsText}>'Code Commando' was the largest project I have been a part of, it was a combined effort of all the developers in my 401 JavaScript course at Code Fellows. My team's job was to build the entire frontend. I personally had input on all the pages and built the rosters and quiz pages.</p>
            </div>
        );
    }
}

export default CodeCommandoData;