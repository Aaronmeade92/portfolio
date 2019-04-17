import React, { Fragment, Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Dashboard from './components/Dashboard.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';


const styles = theme => ({
  root: {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'black',
      },
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
      <Fragment>
      <div className={classes.root}>
        <header className="App-header">
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

export default  withStyles(styles)(App);
