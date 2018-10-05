import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard.js';
import './App.css';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          < Dashboard />
          < Content />
        </header>
      </div>
      </Fragment>
    );
  }
}

export default App;
