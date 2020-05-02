import React from 'react';
import { Link } from 'react-router-dom';

import cookbook1 from './cookbook1.png'
import cookbook2 from './cookbook2.png'
import cookbook3 from './cookbook3.png'
import cookbook4 from './cookbook4.png'

import JumbotronSmall from '../JumbotronSmall'
import Gallery from '../Gallery'

const images = [
  {
    original: cookbook1,
    thumbnail: cookbook1,
  },
  {
    original: cookbook2,
    thumbnail: cookbook2,
  },
  {
    original: cookbook3,
    thumbnail: cookbook3,
  },
  {
    original: cookbook4,
    thumbnail: cookbook4,
  }
];

function Cookbook() {
  return (
    <div>
      <div className='container'>
      <JumbotronSmall name={'Cookbook'}/>
        <p><a href='https://github.com/kendyhiga/cookbook-treinadev' target='_blank' rel='noopener noreferrer'>[Link do Repositório]</a></p>
        <p>
          Este projeto em Ruby on Rails consiste numa plataforma de receitas, que foi criada no 
          curso <a href='https://www.treinadev.com.br/' target='_blank' rel='noopener noreferrer'>TreinaDev </a>
          da <a href='https://www.campuscode.com.br/' target='_blank' rel='noopener noreferrer'>Campus Code</a>.
        </p>
        <p>
          O site atualmente esta hospedado no Heroku e pode ser acessado através do link: 
          <a href='https://cookbook-practice.herokuapp.com/' target='_blank' rel='noopener noreferrer'> https://cookbook-practice.herokuapp.com/</a>
        </p>
        <h4>Screenshots:</h4>
        <Gallery images={images} />
        <h4><Link to='/'>Voltar</Link></h4>
      </div>
    </div>
  );
}

export default Cookbook;
