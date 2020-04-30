import React from 'react'
import { Link } from 'react-router-dom';

import alphaImage1 from './AlphaBlog/alpha1.png'
import calculator1 from './Calculator/calculator1.png'
import cookbook1 from './Cookbook/cookbook1.png'
import shoutr1 from './Shoutr/shoutr1.png'

const getImage = name => {
  switch (name) {
    case 'AlphaBlog': return alphaImage1;
    case 'Calculadora': return calculator1;
    case 'Cookbook': return cookbook1;
    case 'Shoutr': return shoutr1;
    default: return;
  }
}

const Card = (props) =>
  <div className="card card-custom">
    <Link to={props.link}>
      <img className="card-img card-img-top" alt={props.name + 'Screenshot'} src={getImage(props.name)}></img>
      <div className='card-middle'>
        <h4>{props.name}</h4>
      </div>
    </Link>
  </div>

export default Card;
