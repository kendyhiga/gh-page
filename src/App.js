import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import AlphaBlog from './pages/AlphaBlog/AlphaBlog';
import Calculator from './pages/Calculator/Calculator';
import Cookbook from './pages/Cookbook/Cookbook';
import Shoutr from './pages/Shoutr/Shoutr';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HashRouter basename="/">
          <Route exact path="/" component={HomePage} />
          <Route path="/alpha-blog" component={AlphaBlog} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/cookbook" component={Cookbook} />
          <Route path="/shoutr" component={Shoutr} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
