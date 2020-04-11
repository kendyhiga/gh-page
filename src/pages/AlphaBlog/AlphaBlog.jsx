import React from 'react';
import { Link } from "react-router-dom";

import Carousel from 'react-images';
import alphaImage1 from './alpha-blog1.png'
import alphaImage2 from './alpha-blog2.png'

const images = [{ source: alphaImage1}, {source: alphaImage2 }];

function AlphaBlog() {
  return (
    <div>
      <div className='App'>
        <h1>Alpha Blog</h1>
        <p><a href='https://github.com/kendyhiga/alpha-blog' target='_blank'>[Link do Repositório]</a></p>
        <span>Este projeto em Ruby on Rails consiste
          num blog, que foi criado a partir do curso da
          Udemy: <a href='https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/' target='_blank'>
            The Complete Ruby on Rails Developer Course</a>.
        </span>
        <h4><Link to="/">Voltar</Link></h4>
        <h4>Screenshots:</h4>
        <Carousel views={images} />;
      </div>
    </div>
  );
}

export default AlphaBlog;
