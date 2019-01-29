import React, { Fragment, Component } from 'react';
import Dashboard from './components/Dashboard.js';
import './App.css';
import Portfolio from './components/Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';

const background = {
  backgroundColor: '#CCCCFF',
  zIndex: '-2'
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
      <div className="App" style={background}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/projects' component={Portfolio}/>
          <Route exact path='/about' component={About}/>
        </header>
      </div>
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
