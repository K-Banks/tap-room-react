import React from 'react';
import styles from './Keg.css';
import PropTypes from 'prop-types';

function Keg(props){
  let admin = null;
  let description = <p className={styles.description}>{props.description}</p>;
  if (props.currentRouterPath != null) {
    admin = <div className={styles.button}><button onClick={() => {props.onPurchasePint(props.kegId);}}>Purchase</button><button>Edit</button></div>;
    description = null;
  }
  return (
    <div className={styles.keg}>
      <h3><strong>{props.name}</strong></h3>
      <h4>Brewery: {props.brand}</h4>
      {description}
      <p>Price: ${props.price}</p>
      <p>ABV: {props.abv}%</p>
      <p>Pints remaining: {props.remaining}</p>
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
