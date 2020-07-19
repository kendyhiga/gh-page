import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import { render } from 'react-dom';
import { ReactComponent as C01 } from './SVG-cards/01-C.svg';
import { ReactComponent as C02 } from './SVG-cards/02-C.svg';
import { ReactComponent as C03 } from './SVG-cards/03-C.svg';
import { ReactComponent as C04 } from './SVG-cards/04-C.svg';
import { ReactComponent as C05 } from './SVG-cards/05-C.svg';
import { ReactComponent as C06 } from './SVG-cards/06-C.svg';
import { ReactComponent as C07 } from './SVG-cards/07-C.svg';
import { ReactComponent as C08 } from './SVG-cards/08-C.svg';
import { ReactComponent as C09 } from './SVG-cards/09-C.svg';
import { ReactComponent as C10 } from './SVG-cards/10-C.svg';
import { ReactComponent as C11 } from './SVG-cards/11-C.svg';
import { ReactComponent as C12 } from './SVG-cards/12-C.svg';
import { ReactComponent as C13 } from './SVG-cards/13-C.svg';

import { ReactComponent as D01 } from './SVG-cards/01-D.svg';
import { ReactComponent as D02 } from './SVG-cards/02-D.svg';
import { ReactComponent as D03 } from './SVG-cards/03-D.svg';
import { ReactComponent as D04 } from './SVG-cards/04-D.svg';
import { ReactComponent as D05 } from './SVG-cards/05-D.svg';
import { ReactComponent as D06 } from './SVG-cards/06-D.svg';
import { ReactComponent as D07 } from './SVG-cards/07-D.svg';
import { ReactComponent as D08 } from './SVG-cards/08-D.svg';
import { ReactComponent as D09 } from './SVG-cards/09-D.svg';
import { ReactComponent as D10 } from './SVG-cards/10-D.svg';
import { ReactComponent as D11 } from './SVG-cards/11-D.svg';
import { ReactComponent as D12 } from './SVG-cards/12-D.svg';
import { ReactComponent as D13 } from './SVG-cards/13-D.svg';

import { ReactComponent as H01 } from './SVG-cards/01-H.svg';
import { ReactComponent as H02 } from './SVG-cards/02-H.svg';
import { ReactComponent as H03 } from './SVG-cards/03-H.svg';
import { ReactComponent as H04 } from './SVG-cards/04-H.svg';
import { ReactComponent as H05 } from './SVG-cards/05-H.svg';
import { ReactComponent as H06 } from './SVG-cards/06-H.svg';
import { ReactComponent as H07 } from './SVG-cards/07-H.svg';
import { ReactComponent as H08 } from './SVG-cards/08-H.svg';
import { ReactComponent as H09 } from './SVG-cards/09-H.svg';
import { ReactComponent as H10 } from './SVG-cards/10-H.svg';
import { ReactComponent as H11 } from './SVG-cards/11-H.svg';
import { ReactComponent as H12 } from './SVG-cards/12-H.svg';
import { ReactComponent as H13 } from './SVG-cards/13-H.svg';

import { ReactComponent as S01 } from './SVG-cards/01-S.svg';
import { ReactComponent as S02 } from './SVG-cards/02-S.svg';
import { ReactComponent as S03 } from './SVG-cards/03-S.svg';
import { ReactComponent as S04 } from './SVG-cards/04-S.svg';
import { ReactComponent as S05 } from './SVG-cards/05-S.svg';
import { ReactComponent as S06 } from './SVG-cards/06-S.svg';
import { ReactComponent as S07 } from './SVG-cards/07-S.svg';
import { ReactComponent as S08 } from './SVG-cards/08-S.svg';
import { ReactComponent as S09 } from './SVG-cards/09-S.svg';
import { ReactComponent as S10 } from './SVG-cards/10-S.svg';
import { ReactComponent as S11 } from './SVG-cards/11-S.svg';
import { ReactComponent as S12 } from './SVG-cards/12-S.svg';
import { ReactComponent as S13 } from './SVG-cards/13-S.svg';


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
        <C01></C01>
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
