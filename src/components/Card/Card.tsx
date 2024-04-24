import React, { useState } from 'react';

import pictures from '../../assets/1.jpg'
import './Card.scss';

export interface Card {
  id: number;
  name: string;
  description: string;
  price: string;
  photo:string;
}

function Card({ id, name, description,photo, price}: Card) {
 



  return (
    <div className="card">
      <div className='wrapper'>
        
        <img className="card__img" src={photo || pictures} alt="img"/>
        <span className="card__price">{price}</span>
      </div>
 
      <span className="card__title">{name}</span>
      <span className="card__description">{description}</span>
    </div>
  );
}

export default Card;
