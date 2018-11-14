import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard.js';
import './App.css';
import ProjectData from './components/ProjectData';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          < Dashboard />
          <Route exact path='/projects' component={ProjectData}/>
          <Route exact path='/about' component={About}/>
        </header>
      </div>
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
