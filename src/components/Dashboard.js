import React, { Fragment, Component } from 'react';


class Dashboard extends Component {

    render() {
        return(
            <Fragment>
              <div>
                <h1>Hello, my name is Aaron Meade</h1>
                <ul className="links">
                    <li><a href="https://github.com/aaronmeade92"> Github </a></li>
                    <li><a href="https://www.linkedin.com/in/aaron-meade/"> LinkedIn </a></li>
                    <li><a href="https://www.upwork.com/freelancers/~01b1140f5db4656119"> UpWork </a></li>
                </ul>
              </div>
            </Fragment>
        )
    }
}

export default Dashboard;