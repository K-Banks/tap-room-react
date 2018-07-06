import React from 'react';
import styles from './NewKegForm.css';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;
  let _description = null;

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    let newPrice = parseFloat(_price.value);
    let newAbv = parseFloat(_abv.value);
    let newRemaining = parseInt(_remaining.value);
    if (newRemaining > 124 || newRemaining < 0) {
      newRemaining = 124;
    }
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: newPrice, abv: newAbv, remaining: newRemaining, description: _description.value});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
    _remaining.value = '';
    _description.value = '';
  }

  return(
    <div>
      <h1>New Keg Form</h1>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name=input;}}/>
        <br/>
        <input
          type='text'
          id='brand'
          placeholder='Brewery Name'
          ref={(input) => {_brand=input;}}/>
        <br/>
        <input
          type='text'
          id='price'
          placeholder='Enter Price ($)'
          ref={(input) => {_price=input;}}/>
        <br/>
        <input
          type='text'
          id='abv'
          placeholder='Enter Alcohol Content (ABV%)'
          ref={(input) => {_abv=input;}}/>
        <br/>
        <input
          type='text'
          placeholder='Pints remaining in keg (defaults to 124)'
          id='remaining'
          ref={(input) => {_remaining=input;}}/>
        <br/>
        <input
          type='textarea'
          id='description'
          placeholder='Description of Beer'
          ref={(textarea) => {_description=textarea;}}/>
        <button type='submit'>Add new beer</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes={
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
