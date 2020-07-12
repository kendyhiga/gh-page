import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase'

import JumbotronSmall from '../JumbotronSmall'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "gh-page.firebaseapp.com",
  databaseURL: "https://gh-page.firebaseio.com",
  projectId: "gh-page",
  storageBucket: "gh-page.appspot.com",
  messagingSenderId: "825478090892",
  appId: "1:825478090892:web:043d98eb1d7c04d19c6ba9",
  measurementId: "G-SRFR5S31XB"
};

firebase.initializeApp(config)

class President extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount(){
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
        <div className='container'>
          <JumbotronSmall name={'Presidente'}/>
          <h1>Finally {this.state.speed}</h1>
          <br></br>
          <h4><Link to='/'>Voltar</Link></h4>
        </div>
      </div>
    );
  }
}

export default President;
