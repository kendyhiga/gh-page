import React from 'react';
import { Link } from 'react-router-dom';

import alphaImage1 from './alpha-blog1.png'
import alphaImage2 from './alpha-blog2.png'

import Gallery from '../Gallery'

const images = [
  {
    original: alphaImage1,
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: alphaImage2,
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  }
];

function AlphaBlog() {
  return (
    <div>
      <div className='container'>
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
