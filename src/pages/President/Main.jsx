import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import firebase from '../../firebaseConfig'
import JumbotronSmall from '../JumbotronSmall'

class President extends Component {
  constructor() {
    super();
    this.state = {
      intro: 10
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
    const gameStart = this.state.gameStart;
    if (gameStart === true) {
      return <Redirect to={{
        pathname: "/president-start",
        state: { gameID: this.state.gameID }
       }} />
    }
    return (
      <div>
        <div className='container'>
          <JumbotronSmall name={'Presidente'}/>
          <h1>{this.state.intro}</h1>
          <h1>Game ID: {this.state.gameID}</h1>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nome:
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Entrar" />
          </form>
          <h4><Link to='/'>Voltar</Link></h4>
        </div>
      </div>
    );
  }
}

export default President;
