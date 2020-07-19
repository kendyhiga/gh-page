import React, { Component } from 'react';
import JumbotronSmall from '../JumbotronSmall'
import firebase from '../../firebaseConfig'

class Game extends Component {
  constructor() {
    super();
    const DECK = ["01-C", "01-D", "01-H", "01-S",
              "02-C", "02-D", "02-H", "02-S",
              "03-C", "03-D", "03-H", "03-S",
              "04-C", "04-D", "04-H", "04-S",
              "05-C", "05-D", "05-H", "05-S",
              "06-C", "06-D", "06-H", "06-S",
              "07-C", "07-D", "07-H", "07-S",
              "08-C", "08-D", "08-H", "08-S",
              "09-C", "09-D", "09-H", "09-S",
              "10-C", "10-D", "10-H", "10-S",
              "11-C", "11-D", "11-H", "11-S",
              "12-C", "12-D", "12-H", "12-S",
              "13-C", "13-D", "13-H", "13-S"]
    var shuffledDECK, player1Hand, player2Hand
    shuffledDECK = this.shuffle(DECK)
    player1Hand = shuffledDECK.slice(0, 26)
    player2Hand = shuffledDECK.slice(26, 52)

    this.state = {
      shuffledDECK: shuffledDECK,
      player1Hand: player1Hand,
      player2Hand: player2Hand
    };
  };
  shuffle = arr => {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
  };

  componentDidMount(){
  }
  render() {
    const sortHand = (player, hand) => {
      if (player === 1) {
        this.setState({player1Hand: hand.sort((a, b) => a > b ? 1 : -1)})
      } else if (player === 2) {
        this.setState({player2Hand: hand.sort((a, b) => a > b ? 1 : -1)})
      }
    }
    return (
      <div className='container'>
        <h1>GAME</h1>
        <h2>shuffled deck: {this.state.shuffledDECK.join(', ')}</h2>
        <br></br>
        <h2>player 1 hand: {this.state.player1Hand.join(', ')}</h2>
        <div className='btn btn-dark' onClick={() => sortHand(1, this.state.player1Hand)}>
          Ordenar mão
        </div>
        <h2>player 2 hand: {this.state.player2Hand.join(', ')}</h2>
        <div className='btn btn-dark' onClick={() => sortHand(2, this.state.player2Hand)}>
          Ordenar mão
        </div>
      </div>
    );
  }
}

export default Game;
