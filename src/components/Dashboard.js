import React, { Fragment, Component } from 'react';

const iconStyle = {
    padding: "5%",
    fontSize: "50px",
    color: "#61dafb",
}

const textStyle = {
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1%",
}

class Dashboard extends Component {

    render() {
        return(
            <Fragment>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <div>
                <h1>Hello, my name is Aaron Meade</h1>
                <ul className="links">
                    <li><a style={iconStyle} href="https://github.com/aaronmeade92" class="fa fa-github"></a></li>
                    <li><a style={iconStyle} href="https://www.linkedin.com/in/aaron-meade/" class="fa fa-linkedin"></a></li>
                </ul>
                <p style={textStyle}> Welcome to my professional portfolio! <br/> Here you can find links to all of my social media platforms and some examples of what makes me a great frontend developer.</p>
              </div>
            </Fragment>
        )
    }
}

export default Dashboard;