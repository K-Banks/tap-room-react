import React from 'react';
import styles from './Keg.css';
import PropTypes from 'prop-types';

function Keg(props){
  let admin = null;
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;
  let _description = null;
  let description = <p className={styles.description}>{props.description}</p>;

  if (props.currentRouterPath != null) {
    admin = <div className={styles.button}><button onClick={() => {props.onPurchasePint(props.kegId);}}>Purchase</button><button onClick={() => {props.onShowEditKegForm(props.kegId);}}>Edit</button></div>;
    description = null;
  }

  if (props.showEditKegForm === true && props.selectedKegToEdit === props.kegId) {
    admin = <form className = {styles.formStyler} onSubmit={handleEditKegFormSubmission}>
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
      <button onClick={() => {props.onDeleteKeg(props.kegId);}}>Delete</button>
    </form>;
  }

  function handleEditKegFormSubmission(event){
    event.preventDefault();
    let newPrice = parseFloat(_price.value);
    let newAbv = parseFloat(_abv.value);
    let newRemaining = parseInt(_remaining.value);
    if (newRemaining > 124 || newRemaining < 0) {
      newRemaining = 124;
    }
    props.onKegEdit({name: _name.value, brand: _brand.value, price: newPrice, abv: newAbv, remaining: newRemaining, description: _description.value}, props.kegId);
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
  selectedKegToEdit: PropTypes.string,
  onKegEdit: PropTypes.func,
  onDeleteKeg: PropTypes.func
};

export default Keg;
