import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import AlphaBlog from './pages/AlphaBlog/AlphaBlog';
import Calculator from './pages/Calculator/Calculator';
import Cookbook from './pages/Cookbook/Cookbook';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route exact path="/" component={HomePage} />
        <Route path="/alpha-blog" component={AlphaBlog} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/cookbook" component={Cookbook} />
      </HashRouter>
    );
  }
}

export default App;
