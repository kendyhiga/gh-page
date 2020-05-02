import React from 'react'
import { Link } from 'react-router-dom';

const JumbotronSmall = () =>
  <Link to='/'>
    <div className='bg-overlay'>
      <div className='jumbotron jumbotron-fluid jumbotron-custom animated'>
        <h1 className='display-4'>Meus repositórios do <a href='https://github.com/kendyhiga/' target='_blank' rel='noopener noreferrer'>GitHub</a></h1>
      </div>
    </div>
  </Link>

export default JumbotronSmall
