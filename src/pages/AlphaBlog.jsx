import React from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../List.css';

function AlphaBlog() {
  return (
    <div>
      <div className='App'>
        <h1>Alpha Blog</h1>
        <p><a href='https://github.com/kendyhiga/alpha-blog' target='_blank'>[Repositório]</a></p>
        <span>Este projeto em Ruby on Rails consiste
          num blog, que foi criado a partir do curso da
          Udemy: <a href='https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/' target='_blank'>
            The Complete Ruby on Rails Developer Course</a>.
        </span>

        <h4><Link to="/">Voltar</Link></h4>
      </div>
    </div>
  );
}

export default AlphaBlog;
