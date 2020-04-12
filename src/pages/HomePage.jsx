import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import alphaImage1 from './AlphaBlog/alpha-blog1.png'
import calculator1 from './Calculator/calculator1.png'
import cookbook1 from './Cookbook/cookbook1.png'

function HomePage() {
  return (
    <div className='container'>
      <div className="jumbotron jumbotron-fluid jumbotron-custom">
        <div className="container">
          <h1 className="display-4">Meus repositórios do <a href='https://github.com/kendyhiga/' target='_blank' rel='noopener noreferrer'>GitHub</a></h1>
          <p className="lead">Este SPA foi criado em React com objetivo resumir alguns dos meus projetos.</p>
        </div>
      </div>
      <div className='row'>
        <div className="card-deck">
          <div className="card card-custom">
            <Link to='/alpha-blog'>
              <img className="card-img-top" alt='Alpha Blog Screenshot' src={alphaImage1}></img>
            </Link>
          </div>
          <div className="card card-custom">
            <Link to='/calculator'>
              <img className="card-img-top" alt='Calculator Screenshot' src={calculator1}></img>
            </Link>
          </div>
          <div className="card card-custom">
            <Link to='/cookbook'>
              <img className="card-img-top" alt='Cookbook Screenshot' src={cookbook1}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
