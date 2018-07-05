import React from 'react';
import styles from './KegList.css';
import Keg from '../Keg/Keg.jsx';

const masterKegList = [
  {
    name: 'The Red Pig Amber Ale',
    brand: 'Porco Rosso',
    price: 7.00,
    abv: 5.6,
    remaining: 9,
    description: 'An ale straight from the Adriatic'
  },{
    name: 'Sky Pirate Lager',
    brand: 'Laputa',
    price: 4.00,
    abv: 6.8,
    remaining: 110,
    description: 'Talk like a (sky)pirate'
  },{
    name: 'Howl and Growl',
    brand: 'Howl\'s Moving Castle',
    price: 6.50,
    abv: 4.8,
    remaining: 98,
    description: 'Whine like a true wizard'
  },{
    name: 'Ashitaka Ale',
    brand: 'Princess Mononoke',
    price: 7.50,
    abv: 8.5,
    remaining: 13,
    description: 'Brewed by the King of the Forest himself'
  },{
    name: 'Witch\'s Brew',
    brand: 'Kiki\'s Delivery Service',
    price: 4.50,
    abv: 5.0,
    remaining: 57,
    description: 'Something clever about a witch and a cauldron'
  }
];

function KegList(){
  return (
    <div>
      <h2>Beers On Tap:</h2>
      <div className={styles.flex}>
        {masterKegList.map((keg, index) =>
            <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            remaining={keg.remaining}
            description={keg.description}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default KegList;
