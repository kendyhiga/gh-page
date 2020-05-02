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
        <JumbotronSmall name={'Alpha Blog'}/>
        <p><a href='https://github.com/kendyhiga/alpha-blog' target='_blank' rel='noopener noreferrer'>[Link do Repositório]</a></p>
        <h5>Este projeto em Ruby on Rails consiste
          num blog, que foi criado a partir do curso da
          Udemy: <a href='https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/' target='_blank' rel='noopener noreferrer'>
            The Complete Ruby on Rails Developer Course</a>.
        </h5>
        <hr></hr>
        <div className='row'>
          <div className="container-card">
            <div className="main-title"><h1>Recursos:</h1></div>
            <div className="overlay">
              <div className="text">
                <ul>
                  <h5>
                    <li>Cadastro e login</li>
                    <li>Edição do perfil</li>
                    <li>Criação, edição e exclusão de artigos</li>
                  </h5>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='row'>
          <div className="container-card-left float-right">
            <div className="main-title"><h1>Ferramentas utilizadas:</h1></div>
            <div className="overlay-left">
              <div className="text">
                <ul>
                  <h5>
                    <li>Bootstrap para o layout</li>
                    <li>Devise para autenticação</li>
                    <li>Gravatar para pegar o avatar</li>
                  </h5>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <h3>Screenshots:</h3>
        <Gallery images={images} />
        <h3><Link to='/'>Voltar</Link></h3>
      </div>
    </div>
  );
}

export default AlphaBlog;
