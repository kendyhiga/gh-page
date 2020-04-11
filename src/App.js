import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import AlphaBlog from './pages/AlphaBlog/AlphaBlog';
import Calculator from './pages/Calculator/Calculator';
import Cookbook from './pages/Cookbook/Cookbook';

class App extends Component {
  render() {
    return (
      <div className='App col-xs-12 col-sm-12 col-md-12'>
        <HashRouter basename="/">
          <Route exact path="/" component={HomePage} />
          <Route path="/alpha-blog" component={AlphaBlog} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/cookbook" component={Cookbook} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
