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

// class Start extends Component {
//   constructor() {


//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount(){
//     const rootRef = firebase.database().ref();
//     const introRef = rootRef.child('intro');
//     introRef.on('value', snap => {
//       this.setState({
//         intro: snap.val()
//       });
//     });
//   }

//   handleChange(event) {
//     this.setState({name: event.target.value});
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     // var roomID =  `room_${Math.ceil(Math.random() * (1000000 - 1))}`;
//     var roomID =  `room_${Math.ceil(Math.random() * (1 - 1))}`;
//     firebase.database().ref(`${roomID}/${this.state.name}`).set({'hand': ['AH', '3H', 'JH']});
//     this.setState({ roomID: roomID, roomStart: true })
//   }

//   render() {
//     debugger
//     return (
//       <div>
//         <div className='container'>
//           <h1>Name: {this.state.name}</h1>
//           <h1>room ID: {this.props.location.state.name}</h1>
//           <h1>Room ID: {this.state.roomID}</h1>
//           {/* <h1>room ID: {this.props.location.state.roomID}</h1> */}
//           <br></br>
//           <h4><Link to='/president'>Voltar</Link></h4>
//         </div>
//       </div>
//     );
//   }
// }

// export default Start;
