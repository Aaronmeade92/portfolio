import React, { Component, Fragment } from 'react';
import StarWarsData from './StarWarsData.js';
import ChewsItData from './ChewsItData.js';
import CodeCommandoData from './CodeCommandoData.js';
import { NavLink } from 'react-router-dom';

const dropdownStyle = {
    backGround: "red",
    width: "400px",
    border: "2px black solid",
    backgroundColor: "white",
    color: "black",    
}

class Dropdown extends Component {

state = {
    dropDown: false,
    showStarWars: false,
    showChewsIt: false,
    showCodeCommando: false,
}

renderDropDown = () => {
    this.setState({ dropDown: true });
}

closeDropDown = () => {
    this.setState({ dropDown: false });
}
renderStarWars = () => {
    this.setState({ showStarWars: true })
}

renderChewsIt = () => {
    this.setState({ showChewsIt: true })
}
renderCodeCommando = () => {
    this.setState({ showCodeCommando: true })
}

    render() {
        return (
            <Fragment>
                <div className="dropdown" style={dropdownStyle}>
                <button onClick={this.renderDropDown}>Show Projects</button>< br/>
                {this.state.dropDown && 
                <ul>
                    <NavLink to='/codecommando'>Code Commando</NavLink>< br/>
                    <NavLink to='/starwars'>Star Wars</NavLink>< br/>
                    <NavLink to='/chewsit'>Chews It</NavLink>< br/>
                    <button onClick={this.closeDropDown}>close</button>
                </ul>
                }
                </div>
            </Fragment>
        );
    }
}

export default Dropdown;