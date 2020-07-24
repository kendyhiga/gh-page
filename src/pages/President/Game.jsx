import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import './president.scss'

import CARD_A_C from './SVG-cards/C01.svg';
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

import CARD_A_D from './SVG-cards/D01.svg';
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

import CARD_A_H from './SVG-cards/H01.svg';
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

import CARD_A_S from './SVG-cards/S01.svg';
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
    const DECK = [{name: 'CARD_02_C', svg: CARD_02_C, value: 2}, {name: 'CARD_02_D', svg: CARD_02_D, value: 2}, {name: 'CARD_02_H', svg: CARD_02_H, value: 2}, {name: 'CARD_02_S', svg: CARD_02_S, value: 2},
                  {name: 'CARD_03_C', svg: CARD_03_C, value: 3}, {name: 'CARD_03_D', svg: CARD_03_D, value: 3}, {name: 'CARD_03_H', svg: CARD_03_H, value: 3}, {name: 'CARD_03_S', svg: CARD_03_S, value: 3},
                  {name: 'CARD_04_C', svg: CARD_04_C, value: 4}, {name: 'CARD_04_D', svg: CARD_04_D, value: 4}, {name: 'CARD_04_H', svg: CARD_04_H, value: 4}, {name: 'CARD_04_S', svg: CARD_04_S, value: 4},
                  {name: 'CARD_05_C', svg: CARD_05_C, value: 5}, {name: 'CARD_05_D', svg: CARD_05_D, value: 5}, {name: 'CARD_05_H', svg: CARD_05_H, value: 5}, {name: 'CARD_05_S', svg: CARD_05_S, value: 5},
                  {name: 'CARD_06_C', svg: CARD_06_C, value: 6}, {name: 'CARD_06_D', svg: CARD_06_D, value: 6}, {name: 'CARD_06_H', svg: CARD_06_H, value: 6}, {name: 'CARD_06_S', svg: CARD_06_S, value: 6},
                  {name: 'CARD_07_C', svg: CARD_07_C, value: 7}, {name: 'CARD_07_D', svg: CARD_07_D, value: 7}, {name: 'CARD_07_H', svg: CARD_07_H, value: 7}, {name: 'CARD_07_S', svg: CARD_07_S, value: 7},
                  {name: 'CARD_08_C', svg: CARD_08_C, value: 8}, {name: 'CARD_08_D', svg: CARD_08_D, value: 8}, {name: 'CARD_08_H', svg: CARD_08_H, value: 8}, {name: 'CARD_08_S', svg: CARD_08_S, value: 8},
                  {name: 'CARD_09_C', svg: CARD_09_C, value: 9}, {name: 'CARD_09_D', svg: CARD_09_D, value: 9}, {name: 'CARD_09_H', svg: CARD_09_H, value: 9}, {name: 'CARD_09_S', svg: CARD_09_S, value: 9},
                  {name: 'CARD_10_C', svg: CARD_10_C, value: 10}, {name: 'CARD_10_D', svg: CARD_10_D, value: 10}, {name: 'CARD_10_H', svg: CARD_10_H, value: 10}, {name: 'CARD_10_S', svg: CARD_10_S, value: 10},
                  {name: 'CARD_11_C', svg: CARD_11_C, value: 11}, {name: 'CARD_11_D', svg: CARD_11_D, value: 11}, {name: 'CARD_11_H', svg: CARD_11_H, value: 11}, {name: 'CARD_11_S', svg: CARD_11_S, value: 11},
                  {name: 'CARD_12_C', svg: CARD_12_C, value: 12}, {name: 'CARD_12_D', svg: CARD_12_D, value: 12}, {name: 'CARD_12_H', svg: CARD_12_H, value: 12}, {name: 'CARD_12_S', svg: CARD_12_S, value: 12},
                  {name: 'CARD_13_C', svg: CARD_13_C, value: 13}, {name: 'CARD_13_D', svg: CARD_13_D, value: 13}, {name: 'CARD_13_H', svg: CARD_13_H, value: 13}, {name: 'CARD_13_S', svg: CARD_13_S, value: 13},
                  {name: 'CARD_A_C', svg: CARD_A_C, value: 14}, {name: 'CARD_A_D', svg: CARD_A_D, value: 14}, {name: 'CARD_A_H', svg: CARD_A_H, value: 14}, {name: 'CARD_A_S', svg: CARD_A_S, value: 14}]
    var shuffledDECK, player1Hand, player2Hand;
    shuffledDECK = this.shuffle(DECK)
    player1Hand = shuffledDECK.slice(0, 26)
    player2Hand = shuffledDECK.slice(26, 52)

    this.state = {
      shuffledDECK: shuffledDECK,
      player1Name: 'teste',
      player1Hand: player1Hand,
      discardPile: [],
      lastDiscarded: [{value: 0}],
      selectedOption: 1,
      flashMessage: '',
      newRound: true,
      roomID: 8006,
      playersInTheRoom: 1,
      consecutiveSkips: 0
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

  shouldHightlight = value => {
    if(value === this.state.highlightedCard) {
      return '-25px'
    } else {
      return ''
    }
  };

  canStartNewRound = amount => {
    if (this.state.newRound) {
      this.setState({selectedOption: amount,
                     newRound: false})
    }
  }

  selectedOption = option => {
    let className = 'btn btn-secondary btn-custom'
    if (option === this.state.selectedOption) {
      className += ' selected'
    }
    return className
  }

  skipTurn = () => {
    this.setState({consecutiveSkips: this.state.consecutiveSkips + 1})
    if (this.state.consecutiveSkips === this.state.playersInTheRoom) {
      this.setState({lastDiscarded: [{value: 0}],
                    discardPile: [],
                    newRound: true,
                    flashMessage: '',
                    consecutiveSkips: 0})
    }
  }

  playCard = value => {
    let cardsToRemove = this.state.player1Hand.filter(card => card.value === value)
    let selectedCardLength = cardsToRemove.length
    if ((selectedCardLength >= this.state.selectedOption) && (value > this.state.lastDiscarded[0].value)) {
      cardsToRemove = cardsToRemove.slice(0, this.state.selectedOption)
      this.setState({player1Hand: this.state.player1Hand.filter(card => !cardsToRemove.includes(card)),
                     flashMessage: '',
                     discardPile: this.state.discardPile.concat(cardsToRemove),
                     lastDiscarded: cardsToRemove})
      firebase.database().ref(`${this.state.roomID}`).set({'lastDiscarded': cardsToRemove});
    } else if (selectedCardLength >= this.state.selectedOption) {
      this.setState({flashMessage: `Você precisa escolher uma carta mais alta do que a ultima descartada,
                                    a ordem, da mais fraca para a mais forte é:
                                    2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A`})
    } else {
      this.setState({flashMessage: `Você precisa ter ${this.state.selectedOption} desta carta para poder descarta-la(s)`})
    }
  }

  componentDidMount(){
    const rootRef = firebase.database().ref();
    const lastDiscardedRef = rootRef.child(`${this.state.roomID}/lastDiscarded`);
    lastDiscardedRef.on('value', snap => {
      this.setState({
        lastDiscarded: snap.val()
      })
    })
  };

  render() {
    const sortHand = (player, hand) => {
      if (this.state.sorted) {
        this.setState({player1Hand: hand.sort((a, b) => a.name > b.name ? -1 : 1),
          sorted: false})
      } else {
        this.setState({player1Hand: hand.sort((a, b) => a.name > b.name ? 1 : -1),
          sorted: true})
      }
    }
    return (
      <div className=''>
        <h1>President</h1>
        <br></br>
        <div className='deck-hand'>
          {this.state.lastDiscarded[0].value !== 0 &&
          this.state.lastDiscarded.map((card, index) =>
            <img src={card.svg}
                 key={index}
                 alt={`card-${card.name}`}
                 style={{height: "120px",
                         marginLeft: "-60px"}}
                 className='deck-card'
            />
          )}
        </div>

        <div className='btn-group' role='group'>
          <button className={this.selectedOption(4)}
                  onClick={() => this.canStartNewRound(4)}>Quadra</button>
          <button className={this.selectedOption(3)}
                  onClick={() => this.canStartNewRound(3)}>Trinca</button>
          <button className={this.selectedOption(2)}
                  onClick={() => this.canStartNewRound(2)}>Par</button>
          <button className={this.selectedOption(1)}
                  onClick={() => this.canStartNewRound(1)}>Uma</button>
        </div>

        <div className='deck-hand'>
        <h4>{this.state.player1Name}</h4>
          {this.state.player1Hand.map((card, index) =>
            <img src={card.svg}
                 alt={`card-${card.name}`}
                 key={index}
                 style={{height: "120px",
                         marginLeft: "-60px",
                         marginTop: `${this.shouldHightlight(card.value)}` }}
                 className='deck-card'
                 onMouseEnter={() => this.setState({highlightedCard: card.value})}
                 onMouseLeave={() => this.setState({highlightedCard: ''})}
                 onClick={() => this.playCard(card.value)}
            />
          )}
        </div>

        {this.state.flashMessage &&
          <div className='alert alert-danger flash-message col-4'>{this.state.flashMessage}</div>}

        <div className='row action-buttons'>
          <div className='btn btn-dark button' onClick={() => sortHand(1, this.state.player1Hand)}>
            Ordenar mão
          </div>
          <div className='btn btn-dark button' onClick={() => this.skipTurn()}>
            Passar a vez
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
