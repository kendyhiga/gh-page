import React, { Component } from 'react';

import Card from './Card'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class HomePage extends Component {
  constructor() {
    super();
    const cards = [
      { language: 'ruby', link: '/alpha-blog', name: 'AlphaBlog' },
      { language: 'react', link: '/calculator', name: 'Calculadora' },
      { language: 'ruby', link: '/cookbook', name: 'Cookbook' }
    ]
    this.state = {
      cards: cards,
      filtered_cards: cards
    };
  }

  setFilter = (filter) => {
    if(filter === 'all') {
      return this.setState({
        filtered_cards: this.state.cards
      });
    }
    const cards = this.state.cards.filter(card => card.language === filter)
      this.setState({
      filtered_cards: cards
    });
  }

  render() {
    return (
      <div className='container'>
        <div className="jumbotron jumbotron-fluid jumbotron-custom">
          <h1 className="display-4">Meus repositórios do <a href='https://github.com/kendyhiga/' target='_blank' rel='noopener noreferrer'>GitHub</a></h1>
          <p className="lead">Este SPA foi criado em React com objetivo resumir alguns dos meus projetos.</p>
        </div>
        <div className="btn-group d-flex" role="group">
          <button className="btn btn-primary" onClick={() => this.setFilter('all')}>Tudo</button>
          <button className="btn btn-primary" onClick={() => this.setFilter('ruby')}>Ruby</button>
          <button className="btn btn-primary" onClick={() => this.setFilter('react')}>React</button>
        </div>
        <br></br>
        <div className="card-deck">
          {
            this.state.filtered_cards.map((card, index) =>
              <Card key={index} link={card.link} name={card.name}/>
            )
          }
        </div>
      </div>
    );
  }
}
