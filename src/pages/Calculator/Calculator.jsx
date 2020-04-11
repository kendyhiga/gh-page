import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-images';
import calculator1 from './calculator1.png'
import calculator2 from './calculator2.png'

const images = [{ source: calculator1 }, { source: calculator2 }];

function Calculator() {
  return (
    <div>
      <div className='App'>
        <h1>Calculadora</h1>
        <p><a href='https://github.com/kendyhiga/calculadora' target='_blank' rel='noopener noreferrer'>[Link do Repositório]</a></p>
        <span>Este projeto em React consiste
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

export default Calculator;
