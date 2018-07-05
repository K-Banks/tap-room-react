import React from 'react';
import styles from './Keg.css';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.abv}</h3>
      <h3>{props.remaining}</h3>
      <h3>{props.description}</h3>
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
}

export default Keg;
