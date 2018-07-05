import React from 'react';
import styles from './Keg.css';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3><strong>{props.name}</strong></h3>
      <h4>Brewery: {props.brand}</h4>
      <p>{props.description}</p>
      <ul>
        <li>Price: ${props.price}</li>
        <li>ABV: {props.abv}%</li>
        <li>Pints remaining: {props.remaining}  <button>Purchase</button></li>
      </ul>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Keg;
