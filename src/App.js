import React from 'react';
import { Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './List.css';

import HomePage from './pages/HomePage'
import AlphaBlog from './pages/AlphaBlog'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/alpha-blog" component={AlphaBlog} />
    </Switch>
  );
}

export default App;
