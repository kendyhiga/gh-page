import React from 'react'
import { Link } from 'react-router-dom';

import alphaImage1 from './AlphaBlog/alpha-blog1.png'
import calculator1 from './Calculator/calculator1.png'
import cookbook1 from './Cookbook/cookbook1.png'

const getImage = name => {
  if(name === 'AlphaBlog')
    return alphaImage1
  else if (name === 'Calculator')
    return calculator1
  else if (name === 'Cookbook'){
    return cookbook1
  }
}

const Card = props =>
  <div className="card card-custom">
    <Link to={props.link}>
      <img className="card-img card-img-top" alt={props.name + 'Screenshot'} src={getImage(props.name)}></img>
      <div className='card-middle'>
        <h4>{props.name}</h4>
      </div>
    </Link>
  </div>

export default Card;
