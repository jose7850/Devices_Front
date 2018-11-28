import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Routes from '../route_config.js';


export default class Menu extends Component {
  render(){
    return(
      <div>
      <nav className="nav">
        <ul><li><Link to="/devices">Devices</Link></li></ul>
        <ul><li><Link to="/view1">View 1</Link></li></ul>
        <ul><li><Link to="/view2">View 2</Link></li></ul>
      </nav>
        <div>
         <Routes />
        </div>
      </div>
    );
  }
};
