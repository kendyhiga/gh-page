import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      roomID: props.roomID
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({roomID: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ roomID: this.state.roomID,
                    availableRoom: true })
  }

  generateRoomID() {
    return Math.ceil(Math.random() * (10000 - 1));
  }

  render() {
    let enterRoom
    if (this.state.availableRoom) {
      enterRoom =
        <Link to={{ pathname: 'president/room',
                    state: { name: this.state.name,
                            roomID: this.state.roomID }}}>
          <div className="card bg-dark">
            <h1>Entrar na sala {this.state.roomID} </h1>
          </div>
        </Link>
    }
    return (
    <div>
      <h1>{this.state.name}</h1>
        <Link to={{ pathname: 'president/room',
                    state: { name: this.state.name,
                             roomID: this.generateRoomID() }}}>
          <div className="card bg-dark">
            <h1>Criar sala</h1>
          </div>
        </Link>
      <br></br>
      <div className="card bg-dark">
        <form onSubmit={this.handleSubmit}>
          <label>
            Entrar: <input type="text" value={this.state.roomID} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Entrar" />
        </form>
      </div>
      <div>
        { enterRoom }
      </div>
    </div>
  )}
}
export default Start;
