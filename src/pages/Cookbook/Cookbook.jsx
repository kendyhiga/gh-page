
import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-images';
import cookbook1 from './cookbook1.png'
import cookbook2 from './cookbook2.png'
import cookbook3 from './cookbook3.png'
import cookbook4 from './cookbook4.png'

const images = [{ source: cookbook1 }, { source: cookbook2 }, { source: cookbook3 }, { source: cookbook4 }];

function Cookbook() {
  return (
    <div>
      <div className='App'>
        <h1>Cookbook</h1>
        <p><a href='https://github.com/kendyhiga/cookbook-treinadev' target='_blank' rel='noopener noreferrer'>[Link do Repositório]</a></p>
        <span>Este projeto em Ruby on Rails consiste
          numa calculadora, que foi criada a partir do curso da
          Udemy: <a href='https://www.udemy.com/course/react-redux-pt/' target='_blank' rel='noopener noreferrer'>
          Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!</a>.
        </span>
        <h4><Link to='/'>Voltar</Link></h4>
        <h4>Screenshots:</h4>
        <Carousel views={images} />
      </div>
    </div>
  );
}

export default Cookbook;
