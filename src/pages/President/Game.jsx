import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import './president.scss'
import DECK from './DECK'

class Game extends Component {
  constructor() {
    super();

    this.state = {
      shuffledDECK: [],
      player1Name: '',
      player1Hand: [],
      discardPile: [],
      lastDiscarded: [{value: 0}],
      selectedOption: 1,
      flashDangerMessage: '',
      newRound: true,
      roomID: 1,
      playersInTheRoom: 1,
      consecutiveSkips: 0,
      whichPlayerTurn: '',
      nameList: [],
      playersEntered: [],
      started: false,
      cardsDealt: false,
      scoreBoard: {}
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
      const cardsDealtRef = rootRef.child(`${this.state.roomID}/playersEntered/${this.state.player1Name}/hand`);
      cardsDealtRef.on('value', snap => {
        this.setState({
          player1Hand: snap.val(),
          cardsDealt: true,
          started: true
        })
      })
      this.updateScoreBoard()
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
      firebase.database().ref(`${this.state.roomID}/playersEntered/${this.state.nameList[0].name}/hand`).set(player1Hand);
      firebase.database().ref(`${this.state.roomID}/playersEntered/${this.state.nameList[1].name}/hand`).set(player2Hand);
      this.updateScoreBoard()
    }
  };

  sortHand = (player, hand) => {
    if (this.state.sorted) {
      this.setState({player1Hand: hand.sort((a, b) => a.name > b.name ? 1 : -1),
        sorted: false})
    } else {
      this.setState({player1Hand: hand.sort((a, b) => a.name > b.name ? -1 : 1),
        sorted: true})
    }
  }

  skipTurn = () => {
    if (this.state.player1Name === this.state.whichPlayerTurn) {
      let currentConsecutiveSkips = this.state.consecutiveSkips + 1
      this.setState({consecutiveSkips: currentConsecutiveSkips})
      if (this.state.consecutiveSkips === this.state.playersInTheRoom) {
        this.setState({lastDiscarded: [{value: 0}],
                      discardPile: [],
                      newRound: true,
                      flashDangerMessage: '',
                      consecutiveSkips: 0})
      }
      firebase.database().ref(`${this.state.roomID}/`).update({consecutiveSkips: currentConsecutiveSkips});
      this.setNextPlayerTurn(this.state.player1Name)
    }
  }

  playCard = value => {
    let cardsToRemove = this.state.player1Hand.filter(card => card.value === value)
    let selectedCardLength = cardsToRemove.length
    if ((selectedCardLength >= this.state.selectedOption) &&
        (value > this.state.lastDiscarded[0].value) &&
        (this.state.whichPlayerTurn === this.state.player1Name)) {
      this.setNextPlayerTurn(this.state.player1Name)
      cardsToRemove = cardsToRemove.slice(0, this.state.selectedOption)
      this.setState({player1Hand: this.state.player1Hand.filter(card => !cardsToRemove.includes(card)),
                     flashDangerMessage: '',
                     discardPile: this.state.discardPile.concat(cardsToRemove),
                     lastDiscarded: cardsToRemove,
                     consecutiveSkips: 0})
      firebase.database().ref(`${this.state.roomID}`).update({'lastDiscarded': cardsToRemove});
      firebase.database().ref(`${this.state.roomID}/playersEntered/${this.state.player1Name}/`).update({hand: this.state.player1Hand});
      this.updateScoreBoard()
      if (value === 14) {
        firebase.database().ref(`${this.state.roomID}`).update({'whichPlayerTurn': this.state.player1Name});
        this.setState({
          flashHintMessage: 'Você ganhou a rodada, você iniciará a próxima',
          lastDiscarded: [{value: 0}]
        })
      }
    }
    else if (this.state.whichPlayerTurn !== this.state.player1Name) {
      this.setState({
        flashDangerMessage: `Espere a sua vez`,
        flashHintMessage: ''      
      })
    }
    else if (selectedCardLength >= this.state.selectedOption) {
      this.setState({flashDangerMessage: `Você precisa escolher uma carta mais alta do que a ultima descartada,
                                    a ordem, da mais fraca para a mais forte é:
                                    2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A`})
    }
    else {
      this.setState({
        flashDangerMessage: `Você precisa ter ${this.state.selectedOption} desta carta para poder descarta-la(s)`,
        flashHintMessage: ''
      })
    }
  }

  // Game logic
  canStartNewRound = amount => {
    if ((this.state.lastDiscarded[0].value === 0) && (this.state.whichPlayerTurn === this.state.player1Name)) {
      console.log('entrou')
      this.setState({selectedOption: amount,
                     newRound: false})
      firebase.database().ref(`${this.state.roomID}`).update({'selectedOptionRef': amount});
    } else if (this.state.lastDiscarded[0].value === 0) {
      this.setState({ flashDangerMessage: 'Não esta na sua vez' })
    } else {
      this.setState({ flashDangerMessage: 'Você só pode alterar a quantidade de cartas, no inicio da rodada e na sua vez' })
    }
  }

  setFirstPlayerTurn = () => {
    if (this.state.whichPlayerTurn === '') {
      const name = localStorage.getItem('@gh-page/name')
      firebase.database().ref(`${this.state.roomID}`).update({'whichPlayerTurn': name});
      this.setState({whichPlayerTurn: name})
    }
  }

  setNextPlayerTurn = name => {
    if (name === this.state.nameList[0].name) {
      firebase.database().ref(`${this.state.roomID}`).update({'whichPlayerTurn': this.state.nameList[1].name});
      this.setState({whichPlayerTurn: this.state.nameList[1].name})
    }
    else if (name === this.state.nameList[1].name) {
      firebase.database().ref(`${this.state.roomID}`).update({'whichPlayerTurn': this.state.nameList[0].name});
      this.setState({whichPlayerTurn: this.state.nameList[0].name})
    }
  }

  updateScoreBoard = () => {
    for (var i = this.state.nameList.length - 1; i > 0; i--) {
      const rootRef = firebase.database().ref();
      const scoreBoardRef = rootRef.child(`${this.state.roomID}/playersEntered/${this.state.player1Name}/hand`);      
      let handSize = 0  
      scoreBoardRef.once('value', snap => {
        if (snap.val()) {
          handSize = snap.val().length
          firebase.database().ref(`${this.state.roomID}/playersEntered/${this.state.player1Name}/`).update({'handSize': handSize});
        }
      })
    }
  }

  componentDidMount(){
    let persistedName = localStorage.getItem('@gh-page/name');
    let persistedRoomID = localStorage.getItem('@gh-page/roomID');
    let persistedToken = localStorage.getItem('@gh-page/token');
    let persistedPlayerNames = localStorage.getItem('@gh-page/playerNames');
    this.setState({
      player1Name: persistedName,
      roomID: persistedRoomID,
      token: persistedToken,
      nameList: persistedPlayerNames
    })
    let nameList = this.state.nameList.concat(persistedName)

    firebase.database().ref(`${persistedRoomID}/lastDiscarded/`).set([{value: 0}]);

    const nameListRef = firebase.database().ref().child(`${persistedRoomID}/nameList`);
    nameListRef.on('value', snap => {
      if (snap.val()) {
        this.setState({ nameList: Object.values(snap.val()) })
      }
    });

    firebase.database().ref(`${persistedRoomID}/nameList/${persistedToken}/name/`).set(persistedName);
    const rootRef = firebase.database().ref();
    const cardsDealtRef = rootRef.child(`${persistedRoomID}/cardsDealt`);
    cardsDealtRef.on('value', snap => {
      this.setState({
        cardsDealt: snap.val()
      })
    });

    const lastDiscardedRef = rootRef.child(`${persistedRoomID}/lastDiscarded`);
    lastDiscardedRef.on('value', snap => {
      this.setState({
        lastDiscarded: snap.val(),
        playersEntered: nameList
      })
    });

    const whichPlayerTurnRef = firebase.database().ref().child(`${this.state.roomID}/whichPlayerTurn`);
    whichPlayerTurnRef.on('value', snap => {
      if (snap.val()) {
        this.setState({ whichPlayerTurn: snap.val() })
      }
    });

    const selectedOptionRef = firebase.database().ref().child(`${this.state.roomID}/selectedOptionRef`);
      selectedOptionRef.on('value', snap => {
        if (snap.val()) {
          this.setState({ selectedOption: snap.val() })
        }
    });

    const consecutiveSkipsRef = firebase.database().ref().child(`${this.state.roomID}/consecutiveSkips`);
      consecutiveSkipsRef.on('value', snap => {
        if (snap.val()) {
          this.setState({ consecutiveSkips: snap.val() })
        }
    });

    if (this.state.nameList[1] && (this.state.nameList[0] === this.state.player1Name)) {
      const scoreBoardRef = firebase.database().ref().child(`${this.state.roomID}/playersEntered/${this.state.nameList[1].name}/handSize`);
      scoreBoardRef.on('value', snap => {
        if (snap.val()) {
          this.setState({ scoreBoard: snap.val() })
        }
      });
    } else if (this.state.nameList[0] === this.state.player1Name) {
      const scoreBoardRef = firebase.database().ref().child(`${this.state.roomID}/playersEntered/${this.state.nameList[0].name}/handSize`);
      scoreBoardRef.on('value', snap => {
        if (snap.val()) {
          this.setState({ scoreBoard: snap.val() })
        }
      });
    }
    this.setFirstPlayerTurn()
  };

  render() {
    return (
      <div className=''>
        {/* <h1>{this.state.scoreBoard &&
          this.state.scoreBoard.map((score, index) =>
          <span>{score}</span>
        )}</h1> */}
        <h1>President</h1>
        <br></br>
        <div className='deck-discard'>
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

        { this.state.started &&
        <div className='row action-buttons'>
          <span>É a vez de {this.state.whichPlayerTurn}</span>
          <br></br>
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

        { this.state.flashHintMessage &&
          <div className='alert alert-primary flash-message col-4'>
            {this.state.flashHintMessage}
          </div>
        }
        <br></br>
        { this.state.flashDangerMessage &&
          <div className='alert alert-danger flash-message col-4'>
            {this.state.flashDangerMessage}
          </div>
        }
      </div>
    );
  }
}

export default Game;
