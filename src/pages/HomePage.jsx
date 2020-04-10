import React from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../List.css';

function HomePage() {
  return (
    <div>
      <div className="App">
        <h1>Meus repositórios do GitHub</h1>
        <h2>Este SPA foi criado em React para práticar e tem como objetivo resumir meus projetos:</h2>
      </div>
      <div className='List col-xs-12 col-sm-12 col-md-12'>
        <ul>
          <li><h4><Link to="/alpha-blog">Alpha Blog</Link></h4></li>
          <li><h4>Calculadora</h4></li>
          <li><h4>Cookbook</h4></li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
