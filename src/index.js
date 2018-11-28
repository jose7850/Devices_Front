import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/style.css';

import reducers from "./reducers";
import Menu from './components/menu';
//import Login from './components/login';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          
          <Route path="/" component={Menu} />
        </Switch>     
    </BrowserRouter>
  </Provider>, 
  document.querySelector(".app-container")
);
