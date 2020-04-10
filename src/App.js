import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './List.css';

import HomePage from './pages/HomePage'
import AlphaBlog from './pages/AlphaBlog'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route exact path="/" component={HomePage} />
        <Route path="/alpha-blog" component={AlphaBlog} />
      </HashRouter>
    );
  }
}

export default App;
