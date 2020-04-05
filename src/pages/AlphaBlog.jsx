import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../List.css';

function AlphaBlog() {
  return (
    <div>
      <div className='App'>
        <h1><a href='https://github.com/kendyhiga/alpha-blog' target='_blank'>Alpha Blog</a></h1>
        <span>Este projeto em Ruby on Rails consiste
          num blog, que foi criado a partir do curso da
          Udemy: <a href='https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/' target='_blank'>
            The Complete Ruby on Rails Developer Course</a>.
        </span>

        <h4><a href='/'>Voltar</a></h4>
      </div>
    </div>
  );
}

export default AlphaBlog;
