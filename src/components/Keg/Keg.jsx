import React from 'react';
import styles from './Keg.css';

const keg = {
  name: 'Ghibli Brew',
  brand: 'Porco Rosso',
  price: '5.00',
  abv: '5.6',
  remaining: 12,
  description: 'an imaginitive brew just for you'
}

function Keg(){
  return (
    <div>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.abv}</h3>
      <h3>{keg.remaining}</h3>
      <h3>{keg.description}</h3>
    </div>
  );
}

export default Keg;
