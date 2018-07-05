import React from 'react';
import styles from './Header.css';

function Header(){
  return (
    <div>
      <h1>Welcome to Ghibli Taps</h1>
      <h2>Offering up imaginary brews for you</h2>
      <img src='https://static1.srcdn.com/wordpress/wp-content/uploads/spirited-away-cover.jpg' alt='Ghibli image' className={styles.banner}/>
    </div>
  );
}

export default Header;
