
import React from 'react';
import { Link } from 'react-router-dom';

import shoutr1 from './shoutr1.png'
import shoutr2 from './shoutr2.png'
import shoutr3 from './shoutr3.png'

import Gallery from '../Gallery'

const images = [
  {
    original: shoutr1,
    thumbnail: shoutr1,
  },
  {
    original: shoutr2,
    thumbnail: shoutr2,
  },
  {
    original: shoutr3,
    thumbnail: shoutr3,
  }
];

function shoutr() {
  return (
    <div>
      <div className='App'>
        <h1>Shoutr</h1>
        <p><a href='https://github.com/kendyhiga/shoutr-treinadev' target='_blank' rel='noopener noreferrer'>[Link do Repositório]</a></p>
        <p>
          Este projeto em Ruby on Rails consiste numa plataforma de mensagens inspirada no twitter, que foi criado no 
          curso <a href='https://thoughtbot.com/upcase/intermediate-ruby-on-rails-five' target='_blank' rel='noopener noreferrer'>Intermediate Ruby on Rails (Rails 5)</a>
          da <a href='https://thoughtbot.com/upcase' target='_blank' rel='noopener noreferrer'>Up Case, da ThoughtBot</a>.
        </p>
        <h4>Screenshots:</h4>
        <Gallery images={images} />
        <h4><Link to='/'>Voltar</Link></h4>
      </div>
    </div>
  );
}

export default shoutr;
