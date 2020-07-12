import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import JumbotronSmall from '../JumbotronSmall'

export default class ChallengePc extends Component {
  constructor() {
    super();
    const score = 1
    this.state = {
      score: score,
      history: [1]
    };
  }

  generatePcNumber = (total) => {
    if ((total % 11 ) === 0) {
      return 1
    } else {
      return 12 - (total % 11)
    }
  }

  incrementScore = (number) => {
    let currentScore = this.state.score + number
    if (this.endGame(currentScore)) {
      this.setState({score: currentScore });
      this.setState({ history: [...this.state.history, number ] })
    } else {
      let pc_choice = this.generatePcNumber(currentScore)
      this.setState({score: currentScore + pc_choice});
      this.setState({ history: [...this.state.history, number, pc_choice ] });
    }
  }

  endGame = (score) => {
    if (score >= 100) {
      console.log(this.state.history.length)
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
        <JumbotronSmall name={'Challenge'}/>
          <h3>You go second, pick a number between 1 and 10, whoever gets to 100 first, wins.</h3>
          <br></br>
          <h3>The current sum is: {this.state.score}</h3>
          {
            this.endGame(this.state.score) &&
            <h1>{this.state.history.length % 2 === 0 ? 'You won' : 'You lost!'}</h1>
          }
          <br></br>
          {
            !this.endGame(this.state.score) &&
            <div>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(1)}>1</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(2)}>2</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(3)}>3</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(4)}>4</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(5)}>5</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(6)}>6</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(7)}>7</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(8)}>8</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(9)}>9</button>
              <button type="button" className="btn btn-lg btn-dark" onClick={() => this.incrementScore(10)}>10</button>
            </div>
        }
        {
            this.state.history.map((log, index) =>
              <h4 key={index}>{index % 2 === 0 ? 'PC' : 'You' } choose {log}. </h4>
            )
          }
          <br></br>
          <br></br>
          <h4><Link to='/challenge'>Voltar</Link></h4>
        </div>
      </div>
    );
  }
}
