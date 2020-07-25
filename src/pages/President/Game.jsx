import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import './president.scss'
import DECK from './DECK'

class Game extends Component {
  constructor() {
    super();

    this.state = {
      shuffledDECK: [],
      player1Name: 'teste',
      player1Hand: [],
      discardPile: [],
      lastDiscarded: [{value: 0}],
      selectedOption: 1,
      flashMessage: '',
      newRound: true,
      roomID: 1,
      playersInTheRoom: 1,
      consecutiveSkips: 0,
      whichPlayerTurn: '',
      nameList: [],
      playersEntered: [],
      started: false,
      cardsDealt: false
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

  selectedOption = option => {
    let className = 'btn btn-secondary btn-custom'
    if (option === this.state.selectedOption) {
      className += ' selected'
    }
    return className
  }

  // Actions
  dealCards = () => {
    if (this.state.cardsDealt) {
      const rootRef = firebase.database().ref();
      const cardsDealtRef = rootRef.child(`${this.state.roomID}/playersEntered/${this.state.name}/hand`);
      cardsDealtRef.once('value', snap => {
        this.setState({
          player1Hand: snap.val(),
          cardsDealt: true,
          started: true
        })
      })
    } else {
      var shuffledDECK, player1Hand, player2Hand;
      shuffledDECK = this.shuffle(DECK)
      player1Hand = shuffledDECK.slice(0, 26)
      player2Hand = shuffledDECK.slice(26, 52)
      this.setState({
        player1Hand: player1Hand,
        cardsDealt: false,
        started: true
      })
      firebase.database().ref(`${this.state.roomID}/cardsDealt`).set(true);
      firebase.database().ref(`${this.state.roomID}/playersEntered/${this.state.playersEntered[0].name}/hand`).set(player1Hand);
      firebase.database().ref(`${this.state.roomID}/playersEntered/${this.state.playersEntered[1].name}/hand`).set(player2Hand);
    }
  };

  sortHand = (player, hand) => {
    if (this.state.sorted) {
      this.setState({player1Hand: hand.sort((a, b) => a.name > b.name ? -1 : 1),
        sorted: false})
    } else {
      this.setState({player1Hand: hand.sort((a, b) => a.name > b.name ? 1 : -1),
        sorted: true})
    }
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
    if ((selectedCardLength >= this.state.selectedOption) &&
        (value > this.state.lastDiscarded[0].value) &&
        // (this.state.whichPlayerTurn)) {
        (true)) {
      cardsToRemove = cardsToRemove.slice(0, this.state.selectedOption)
      this.setState({player1Hand: this.state.player1Hand.filter(card => !cardsToRemove.includes(card)),
                     flashMessage: '',
                     discardPile: this.state.discardPile.concat(cardsToRemove),
                     lastDiscarded: cardsToRemove})
      firebase.database().ref(`${this.state.roomID}`).set({'lastDiscarded': cardsToRemove});
    } else if (this.state.whichPlayerTurn !== this.state.player1Name) {
      this.setState({flashMessage: `Espere a sua vez`})
    } else if (selectedCardLength >= this.state.selectedOption) {
      this.setState({flashMessage: `Você precisa escolher uma carta mais alta do que a ultima descartada,
                                    a ordem, da mais fraca para a mais forte é:
                                    2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A`})
    } else {
      this.setState({flashMessage: `Você precisa ter ${this.state.selectedOption} desta carta para poder descarta-la(s)`})
    }
  }

  // Game logic
  canStartNewRound = amount => {
    if (this.state.newRound) {
      this.setState({selectedOption: amount,
                     newRound: false})
    }
  }

  nextPlayer = lastPlayerName => {
    console.log(this.state.player1Name)
  }

  componentDidMount(){
    let persistedName = localStorage.getItem('@gh-page/name');
    let persistedRoomID = localStorage.getItem('@gh-page/roomID');
    let persistedToken = localStorage.getItem('@gh-page/token');
    this.setState({
      name: persistedName,
      roomID: persistedRoomID,
      token: persistedToken
    })
    let nameList = this.state.nameList.concat(persistedName)

    firebase.database().ref(`${persistedRoomID}/lastDiscarded/`).set([{value: 0}]);

    const playersEnteredRef = firebase.database().ref().child(`${persistedRoomID}/playersEntered`);
    playersEnteredRef.on('value', snap => {
      if (snap.val()) {
        this.setState({ playersEntered: Object.values(snap.val()) })
      }
    });

    firebase.database().ref(`${persistedRoomID}/playersEntered/${persistedToken}/name/`).set(persistedName);
    const rootRef = firebase.database().ref();
    const cardsDealtRef = rootRef.child(`${persistedRoomID}/cardsDealt`);
    cardsDealtRef.on('value', snap => {
      this.setState({
        cardsDealt: snap.val()
      })
    })
    const lastDiscardedRef = rootRef.child(`${persistedRoomID}/lastDiscarded`);
    lastDiscardedRef.on('value', snap => {
      this.setState({
        lastDiscarded: snap.val(),
        playersEntered: nameList
      })
    })
  };

  render() {
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
          {this.state.player1Hand && this.state.player1Hand.map((card, index) =>
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

          { this.state.started &&
          <div className='row action-buttons'>
            <div className='btn btn-dark button' onClick={() => this.sortHand(1, this.state.player1Hand)}>
              Ordenar mão
            </div>
            <div className='btn btn-dark button' onClick={() => this.skipTurn()}>
              Passar a vez
            </div>
          </div>
          } { !this.state.started && 
          <div className='row action-buttons'>
            <div className='btn btn-dark button' onClick={() => this.dealCards()}>
              Distribuir as cartas
            </div>
          </div>
          }
      </div>
    );
  }
}

export default Game;
