import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebaseConfig'

class Start extends Component {
  constructor() {
    super();
    debugger
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const rootRef = firebase.database().ref();
    const introRef = rootRef.child('intro');
    introRef.on('value', snap => {
      this.setState({
        intro: snap.val()
      });
    });
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // var gameID =  `Game_${Math.ceil(Math.random() * (1000000 - 1))}`;
    var gameID =  `Game_${Math.ceil(Math.random() * (1 - 1))}`;
    firebase.database().ref(`${gameID}/${this.state.name}`).set({'hand': ['AH', '3H', 'JH']});
    this.setState({ gameID: gameID, gameStart: true })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1>Game ID: {this.state.gameID}</h1>
          <h1>Game ID: {this.props.location.state.gameID}</h1>
          <br></br>
          <h4><Link to='/president'>Voltar</Link></h4>
        </div>
      </div>
    );
  }
}

export default Start;
