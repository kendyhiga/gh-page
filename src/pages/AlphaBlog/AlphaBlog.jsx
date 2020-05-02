import React from 'react';
import { Link } from 'react-router-dom';

import alphaImage1 from './alpha1.png'
import alphaImage2 from './alpha2.png'
import alphaImage3 from './alpha3.png'

import JumbotronSmall from '../JumbotronSmall'
import Gallery from '../Gallery'

const images = [
  {
    original: alphaImage1,
    thumbnail: alphaImage1,
  },
  {
    original: alphaImage2,
    thumbnail: alphaImage2,
  },
  {
    original: alphaImage3,
    thumbnail: alphaImage3,
  }
];

function AlphaBlog() {
  return (
    <div>
      <div className='container'>
        <JumbotronSmall />
        <h1>Alpha Blog</h1>
        <p><a href='https://github.com/kendyhiga/alpha-blog' target='_blank' rel='noopener noreferrer'>[Link do Repositório]</a></p>
        <span>Este projeto em Ruby on Rails consiste
          num blog, que foi criado a partir do curso da
          Udemy: <a href='https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/' target='_blank' rel='noopener noreferrer'>
            The Complete Ruby on Rails Developer Course</a>.
        </span>
        <h4>Screenshots:</h4>
        <Gallery images={images} />
        <h4><Link to='/'>Voltar</Link></h4>
      </div>
    </div>
  );
}

export default AlphaBlog;
