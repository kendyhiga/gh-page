import React from 'react';
import { Link } from 'react-router-dom';

import JumbotronSmall from '../JumbotronSmall'

function Challenge() {
  return (
    <div>
      <div className='container'>
      <JumbotronSmall name={'Presidente'}/>
        <h3>Choosing numbers between 1 and 10, whoever gets to 100 first, wins.</h3>
        <h3>Would you like to go first?</h3>
        <Link to='/challenge_me'><h4>Yes</h4></Link>
        <Link to='/challenge_pc'><h4>No</h4></Link>
        <br></br>
        <h4><Link to='/'>Voltar</Link></h4>
      </div>
    </div>
  );
}

export default Challenge;
