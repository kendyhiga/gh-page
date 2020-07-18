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
    const rootRef = firebase.database().ref().child(this.props.location.state.roomID);
    rootRef.on('value', snap => {
      this.setState({ players: Object.keys(snap.val()) })
    });
      this.setState({
        name: this.props.location.state.name,
        roomID: this.props.location.state.roomID,
        players: [this.props.location.state.name]
    });
    firebase.database().ref(`${this.props.location.state.roomID}/${this.props.location.state.name}`).set({'hand': ['AH', '3H', 'JH']});
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
