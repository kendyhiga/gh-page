import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function HomePage() {
  return (
    <div>
      <div className='App col-xs-12 col-sm-12 col-md-12'>
        <h1>Meus repositórios do <a href='https://github.com/kendyhiga/' target='_blank' rel='noopener noreferrer'>GitHub</a></h1>
        <h2>Este SPA foi criado em React com objetivo resumir alguns dos meus projetos:</h2>
        <div className=''>
          <ul>
            <li><h4><Link to='/alpha-blog'>Alpha Blog</Link></h4></li>
            <li><h4><Link to='/calculator'>Calculadora</Link></h4></li>
            <li><h4><Link to='/cookbook'>Cookbook</Link></h4></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
