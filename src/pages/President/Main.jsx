import React, { Component } from 'react';
import JumbotronSmall from '../JumbotronSmall'
import Start from './Start';

class President extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ name: this.state.name,
                    nameFilled: true })
    localStorage.setItem('@gh-page/name', this.state.name)
  }

  render() {
    var nameFilled = this.state.nameFilled;
    let gameStart
    if (nameFilled) {
      gameStart = <Start name={this.state.name} />
    } else {
      gameStart =
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome: <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Entrar" />
        </form>
    }

    return (
      <div className='container'>
        <JumbotronSmall name={'Presidente'}/>
        <br></br>
        { gameStart }
      </div>
    );
  }
}

export default President;
