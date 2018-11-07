import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard.js';
import './App.css';
import Content from './components/Content';
import { BrowserRouter, Route } from 'react-router-dom';
import ChewsItData from './components/ChewsItData.js';
import CodeCommandoData from './components/CodeCommandoData.js';
import StarWarsData from './components/StarWarsData.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          < Dashboard />
          {/* <Route exact path='/home' component={Dashboard}/> */}
          <Route exact path='/chewsit' component={ChewsItData}/>
          <Route exact path='/codecommando' component={CodeCommandoData}/>
          <Route exact path='/starwars' component={StarWarsData}/>
        </header>
      </div>
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
