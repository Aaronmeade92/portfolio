import React, { Fragment, Component } from 'react';

const iconStyle = {
    padding: "1em",
    fontSize: "50px",
}


class Dashboard extends Component {

    render() {
        return(
            <Fragment>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <div>
                <h1>Hello, my name is Aaron Meade</h1>
                <ul className="links">
                    <li style={iconStyle}><a href="https://github.com/aaronmeade92" class="fa fa-github"></a></li>
                    <li style={iconStyle}><a href="https://www.linkedin.com/in/aaron-meade/" class="fa fa-linkedin"></a></li>
                </ul>
              </div>
            </Fragment>
        )
    }
}

export default Dashboard;