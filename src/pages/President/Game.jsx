import React, { Component } from 'react';
import JumbotronSmall from '../JumbotronSmall'
import firebase from '../../firebaseConfig'

class Game extends Component {
  constructor() {
    super();
    this.state = {};
  }
    componentDidMount(){
  }
  render() {
    return (
      <div className='container'>
        <h1>GAME</h1>
      </div>
    );
  }
}

export default Game;
