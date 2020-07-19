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

import { ReactComponent as Joker } from './SVG-cards/JOKER.svg';



class Game extends Component {
  constructor() {
    super();
    const DECK = ["C01", "D01", "H01", "S01",
                  "C02", "D02", "H02", "S02",
                  "C03", "D03", "H03", "S03",
                  "C04", "D04", "H04", "S04",
                  "C05", "D05", "H05", "S05",
                  "C06", "D06", "H06", "S06",
                  "C07", "D07", "H07", "S07",
                  "C08", "D08", "H08", "S08",
                  "C09", "D09", "H09", "S09",
                  "C10", "D10", "H10", "S10",
                  "C11", "D11", "H11", "S11",
                  "C12", "D12", "H12", "S12",
                  "C13", "D13", "H13", "S13"]
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
        <C02></C02>
        <C03></C03>
        <C04></C04>
        <C05></C05>
        <C06></C06>
        <C07></C07>
        <C08></C08>
        <C09></C09>
        <C10></C10>
        <C11></C11>
        <C12></C12>
        <C13></C13>

        <D01></D01>
        <D02></D02>
        <D03></D03>
        <D04></D04>
        <D05></D05>
        <D06></D06>
        <D07></D07>
        <D08></D08>
        <D09></D09>
        <D10></D10>
        <D11></D11>
        <D12></D12>
        <D13></D13>

        <H01></H01>
        <H02></H02>
        <H03></H03>
        <H04></H04>
        <H05></H05>
        <H06></H06>
        <H07></H07>
        <H08></H08>
        <H09></H09>
        <H10></H10>
        <H11></H11>
        <H12></H12>
        <H13></H13>

        <S01></S01>
        <S02></S02>
        <S03></S03>
        <S04></S04>
        <S05></S05>
        <S06></S06>
        <S07></S07>
        <S08></S08>
        <S09></S09>
        <S10></S10>
        <S11></S11>
        <S12></S12>
        <S13></S13>

        <Joker></Joker>

        <h1>GAME</h1>
        <h2>shuffled deck: {this.state.shuffledDECK.join(', ')}</h2>
        <br></br>
        <h2>player 1 hand: {this.state.player1Hand.join(', ')}</h2>
        <h2>player 1 hand: </h2>
        {this.state.player1Hand.map((card, index) =>
          eval(`1 + 1`)
        )}
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
