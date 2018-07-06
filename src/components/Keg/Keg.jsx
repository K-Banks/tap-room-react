import React from 'react';
import styles from './Keg.css';
import PropTypes from 'prop-types';

function Keg(props){
  let admin = null;
  let description = <p className={styles.description}>{props.description}</p>;

  if (props.currentRouterPath != null) {
    admin = <div className={styles.button}><button onClick={() => {props.onPurchasePint(props.kegId);}}>Purchase</button><button onClick={() => {props.onShowEditKegForm(props.kegId);}}>Edit</button></div>;
    description = null;
  }

  if (props.showEditKegForm === true && props.selectedKegToEdit === props.kegId) {
    admin = <form>
      <input
        type='text'
        id='name'
        defaultValue={props.name}
        ref={(input) => {_name=input;}}/>
      <br/>
      <input
        type='text'
        id='brand'
        defaultValue={props.brand}
        ref={(input) => {_brand=input;}}/>
      <br/>
      <input
        type='text'
        id='price'
        defaultValue={props.price}
        ref={(input) => {_price=input;}}/>
      <br/>
      <input
        type='text'
        id='abv'
        defaultValue={props.abv}
        ref={(input) => {_abv=input;}}/>
      <br/>
      <input
        type='text'
        defaultValue={props.remaining}
        id='remaining'
        ref={(input) => {_remaining=input;}}/>
      <br/>
      <input
        type='textarea'
        id='description'
        defaultValue={props.description}
        ref={(textarea) => {_description=textarea;}}/>
      <button type='submit'>Submit Edits</button>
      <button>Delete</button>
    </form>;
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
  currentRouterPath: PropTypes.string,
  onShowEditKegForm: PropTypes.func,
  showEditKegForm: PropTypes.bool,
  selectedKegToEdit: PropTypes.string
};

export default Keg;
