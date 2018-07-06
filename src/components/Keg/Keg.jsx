import React from 'react';
import styles from './Keg.css';
import PropTypes from 'prop-types';

function Keg(props){
  let admin = null;
  let description = <p>{props.description}</p>;
  if (props.currentRouterPath != null) {
    admin = <button className={styles.button} onClick={() => {props.onPurchasePint(props.kegId);}}>Purchase</button>;
    description = null;
  }
  return (
    <div className={styles.keg}>
      <h3><strong>{props.name}</strong></h3>
      <h4>Brewery: {props.brand}</h4>
      {description}
      <ul>
        <li>Price: ${props.price}</li>
        <li>ABV: {props.abv}%</li>
        <li>Pints remaining: {props.remaining}</li>
      </ul>
      {admin}
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
  onPurchasePint: PropTypes.func,
  kegId: PropTypes.string,
  currentRouterPath: PropTypes.string
};

export default Keg;
