import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import AlphaBlog from './pages/AlphaBlog/AlphaBlog';
import Calculator from './pages/Calculator/Calculator';
import Cookbook from './pages/Cookbook/Cookbook';
import Shoutr from './pages/Shoutr/Shoutr';
import Challenge from './pages/Challenge/Challenge';
import ChallengeMe from './pages/Challenge/ChallengeMe';
import ChallengePc from './pages/Challenge/ChallengePc';
import President from './pages/President/Main';
import PresidentRoom from './pages/President/Room';
import PresidentGame from './pages/President/Game';

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
          <Route path="/challenge" component={Challenge} />
          <Route path="/challenge_me" component={ChallengeMe} />
          <Route path="/challenge_pc" component={ChallengePc} />
          <Route exact path="/president" component={President} />
          <Route exact path="/president/room" component={PresidentRoom} />
          <Route exact path="/president/game" component={PresidentGame} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
