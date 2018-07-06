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
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, remaining: _remaining.value, description: _description.value});
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
        <label>Enter Price ($)</label>
        <input
          type='number'
          id='price'
          min='3'
          max='12'
          ref={(input) => {_price=input;}}/>
        <br/>
        <label>Enter Alcohol Content (ABV%)</label>
        <input
          type='number'
          id='abv'
          min='0'
          max='30'
          ref={(input) => {_abv=input;}}/>
        <br/>
        <label>Pints remaining in keg (defaults to 124)</label>
        <input
          type='number'
          min='0'
          max='124'
          id='remaining'
          defaultValue='124'
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
