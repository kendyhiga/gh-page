import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import { ReactSVG } from 'react-svg'

import CARD_01_C from './SVG-cards/C01.svg';
import CARD_02_C from './SVG-cards/C02.svg';
import CARD_03_C from './SVG-cards/C03.svg';
import CARD_04_C from './SVG-cards/C04.svg';
import CARD_05_C from './SVG-cards/C05.svg';
import CARD_06_C from './SVG-cards/C06.svg';
import CARD_07_C from './SVG-cards/C07.svg';
import CARD_08_C from './SVG-cards/C08.svg';
import CARD_09_C from './SVG-cards/C09.svg';
import CARD_10_C from './SVG-cards/C10.svg';
import CARD_11_C from './SVG-cards/C11.svg';
import CARD_12_C from './SVG-cards/C12.svg';
import CARD_13_C from './SVG-cards/C13.svg';

import CARD_01_D from './SVG-cards/D01.svg';
import CARD_02_D from './SVG-cards/D02.svg';
import CARD_03_D from './SVG-cards/D03.svg';
import CARD_04_D from './SVG-cards/D04.svg';
import CARD_05_D from './SVG-cards/D05.svg';
import CARD_06_D from './SVG-cards/D06.svg';
import CARD_07_D from './SVG-cards/D07.svg';
import CARD_08_D from './SVG-cards/D08.svg';
import CARD_09_D from './SVG-cards/D09.svg';
import CARD_10_D from './SVG-cards/D10.svg';
import CARD_11_D from './SVG-cards/D11.svg';
import CARD_12_D from './SVG-cards/D12.svg';
import CARD_13_D from './SVG-cards/D13.svg';

import CARD_01_H from './SVG-cards/H01.svg';
import CARD_02_H from './SVG-cards/H02.svg';
import CARD_03_H from './SVG-cards/H03.svg';
import CARD_04_H from './SVG-cards/H04.svg';
import CARD_05_H from './SVG-cards/H05.svg';
import CARD_06_H from './SVG-cards/H06.svg';
import CARD_07_H from './SVG-cards/H07.svg';
import CARD_08_H from './SVG-cards/H08.svg';
import CARD_09_H from './SVG-cards/H09.svg';
import CARD_10_H from './SVG-cards/H10.svg';
import CARD_11_H from './SVG-cards/H11.svg';
import CARD_12_H from './SVG-cards/H12.svg';
import CARD_13_H from './SVG-cards/H13.svg';

import CARD_01_S from './SVG-cards/S01.svg';
import CARD_02_S from './SVG-cards/S02.svg';
import CARD_03_S from './SVG-cards/S03.svg';
import CARD_04_S from './SVG-cards/S04.svg';
import CARD_05_S from './SVG-cards/S05.svg';
import CARD_06_S from './SVG-cards/S06.svg';
import CARD_07_S from './SVG-cards/S07.svg';
import CARD_08_S from './SVG-cards/S08.svg';
import CARD_09_S from './SVG-cards/S09.svg';
import CARD_10_S from './SVG-cards/S10.svg';
import CARD_11_S from './SVG-cards/S11.svg';
import CARD_12_S from './SVG-cards/S12.svg';
import CARD_13_S from './SVG-cards/S13.svg';

// import Joker from './SVG-cards/JOKER.svg';



class Game extends Component {
  constructor() {
    super();
    const DECK = [{name: 'CARD_01_C', svg: CARD_01_C}, {name: 'CARD_01_D', svg: CARD_01_D}, {name: 'CARD_01_H', svg: CARD_01_H}, {name: 'CARD_01_S', svg: CARD_01_S},
                  {name: 'CARD_02_C', svg: CARD_02_C}, {name: 'CARD_02_D', svg: CARD_02_D}, {name: 'CARD_02_H', svg: CARD_02_H}, {name: 'CARD_02_S', svg: CARD_02_S},
                  {name: 'CARD_03_C', svg: CARD_03_C}, {name: 'CARD_03_D', svg: CARD_03_D}, {name: 'CARD_03_H', svg: CARD_03_H}, {name: 'CARD_03_S', svg: CARD_03_S},
                  {name: 'CARD_04_C', svg: CARD_04_C}, {name: 'CARD_04_D', svg: CARD_04_D}, {name: 'CARD_04_H', svg: CARD_04_H}, {name: 'CARD_04_S', svg: CARD_04_S},
                  {name: 'CARD_05_C', svg: CARD_05_C}, {name: 'CARD_05_D', svg: CARD_05_D}, {name: 'CARD_05_H', svg: CARD_05_H}, {name: 'CARD_05_S', svg: CARD_05_S},
                  {name: 'CARD_06_C', svg: CARD_06_C}, {name: 'CARD_06_D', svg: CARD_06_D}, {name: 'CARD_06_H', svg: CARD_06_H}, {name: 'CARD_06_S', svg: CARD_06_S},
                  {name: 'CARD_07_C', svg: CARD_07_C}, {name: 'CARD_07_D', svg: CARD_07_D}, {name: 'CARD_07_H', svg: CARD_07_H}, {name: 'CARD_07_S', svg: CARD_07_S},
                  {name: 'CARD_08_C', svg: CARD_08_C}, {name: 'CARD_08_D', svg: CARD_08_D}, {name: 'CARD_08_H', svg: CARD_08_H}, {name: 'CARD_08_S', svg: CARD_08_S},
                  {name: 'CARD_09_C', svg: CARD_09_C}, {name: 'CARD_09_D', svg: CARD_09_D}, {name: 'CARD_09_H', svg: CARD_09_H}, {name: 'CARD_09_S', svg: CARD_09_S},
                  {name: 'CARD_10_C', svg: CARD_10_C}, {name: 'CARD_10_D', svg: CARD_10_D}, {name: 'CARD_10_H', svg: CARD_10_H}, {name: 'CARD_10_S', svg: CARD_10_S},
                  {name: 'CARD_11_C', svg: CARD_11_C}, {name: 'CARD_11_D', svg: CARD_11_D}, {name: 'CARD_11_H', svg: CARD_11_H}, {name: 'CARD_11_S', svg: CARD_11_S},
                  {name: 'CARD_12_C', svg: CARD_12_C}, {name: 'CARD_12_D', svg: CARD_12_D}, {name: 'CARD_12_H', svg: CARD_12_H}, {name: 'CARD_12_S', svg: CARD_12_S},
                  {name: 'CARD_13_C', svg: CARD_13_C}, {name: 'CARD_13_D', svg: CARD_13_D}, {name: 'CARD_13_H', svg: CARD_13_H}, {name: 'CARD_13_S', svg: CARD_13_S}]
    var shuffledDECK, player1Hand, player2Hand;
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
        debugger
        this.setState({player1Hand: hand.sort((a, b) => a.name > b.name ? 1 : -1)})
      } else if (player === 2) {
        this.setState({player2Hand: hand.sort((a, b) => a.name > b.name ? 1 : -1)})
      }
    }
    return (
      <div className='container'>
        <h1>GAME</h1>
        <br></br>
        <h2>player 1 hand: </h2>
        <ReactSVG src='./SVG-cards/D01.svg' />
        {this.state.player1Hand.map((card, index) =>
          <img src={card.svg} />
        )}
        <div className='btn btn-dark' onClick={() => sortHand(1, this.state.player1Hand)}>
          Ordenar mão
        </div>
        <h2>player 2 hand: </h2>
        {this.state.player2Hand.map((card, index) =>
          <img src={card.svg} />
        )}
        <div className='btn btn-dark' onClick={() => sortHand(2, this.state.player2Hand)}>
          Ordenar mão
        </div>
      </div>
    );
  }
}

export default Game;
