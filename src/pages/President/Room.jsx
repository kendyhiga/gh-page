import React, { Component } from 'react';
import JumbotronSmall from '../JumbotronSmall'
import firebase from '../../firebaseConfig'
import { Link } from 'react-router-dom';

class Room extends Component {
  constructor() {
    super();
    this.state = { players: [] };
  }
  componentDidMount(){
    let persistedName = localStorage.getItem('@gh-page/name');
    let persistedRoomID = localStorage.getItem('@gh-page/roomID');
    let persistedToken = localStorage.getItem('@gh-page/token');
    if (persistedName && persistedRoomID && persistedToken) {
      console.log('all set to go!')
    } else {
      persistedName = this.props.location.state.name
      persistedRoomID = this.props.location.state.roomID
      persistedToken = Math.ceil(Math.random() * (10000 - 1))
      localStorage.setItem('@gh-page/name', persistedName)
      localStorage.setItem('@gh-page/roomID', persistedRoomID)
      localStorage.setItem('@gh-page/token', persistedToken)
    }
    this.setState({
      name: persistedName,
      roomID: persistedRoomID,
      token: persistedToken,
      players: [this.state.players.concat(persistedName)]
    });
    const playersRef = firebase.database().ref().child(`${persistedRoomID}/players`);
    playersRef.on('value', snap => {
      if (snap.val()) {
        this.setState({ players: Object.values(snap.val()) })
      }
    });
    firebase.database().ref(`${persistedRoomID}/players/${persistedToken}/`).set(persistedName);
  }

  render() {
    var amountOfPlayers = this.state.players.length;
    let gameStartButton
    if (amountOfPlayers === 2) {
      gameStartButton =
        <Link to={{ pathname: '/president/game',
                state: { name: this.state.name,
                         roomID: this.state.roomID,
                         players: this.state.players }}}>
          <div className="card bg-dark">
            <h1>Iniciar partida</h1>
          </div>
        </Link>
    }

    return (
      <div className='container'>
        <JumbotronSmall name={'Presidente'}/>
        <br></br>
        <span>Room ID: </span>{ this.state.roomID }
        <h4>Jogadores na sala:</h4>
        <ul>
          {this.state.players.map((player, index) =>
              <li key={index}>{player}</li>
          )}
        </ul>
        { gameStartButton}
      </div>
    );
  }
}

export default Room;
