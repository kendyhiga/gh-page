import React from 'react';
import Card from './Card'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function HomePage() {
  return (
    <div className='container'>
      <div className="jumbotron jumbotron-fluid jumbotron-custom">
        <h1 className="display-4">Meus repositórios do <a href='https://github.com/kendyhiga/' target='_blank' rel='noopener noreferrer'>GitHub</a></h1>
        <p className="lead">Este SPA foi criado em React com objetivo resumir alguns dos meus projetos.</p>
      </div>
      <div className='row'>
          <div className="card-deck">
            <Card link='/alpha-blog' name='AlphaBlog'/>
            <Card link='/calculator' name='Calculator'/>
            <Card link='/cookbook' name='Cookbook'/>
          </div>
        </div>
      </div>
  );
}

export default HomePage;
