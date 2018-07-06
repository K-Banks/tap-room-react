import React from 'react';
import styles from './NewKegForm.css';

function NewKegForm(){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;
  let _description = null;

  return(
    <div>
      <h1>New Keg Form</h1>
      <form>
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
          value='124'
          ref={(input) => {_remaining=input;}}/>
        <br/>
        <input
          type='textarea'
          id='description'
          placeholder='Description of Beer'
          ref={(input) => {_description=input;}}/>
      </form>
    </div>
  );
}

export default NewKegForm;
