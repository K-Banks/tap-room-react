import React from 'react';
import styles from './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
  return (
    <div className={styles.spacer}>
      <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link> | <Link to='/aboutUs'>About Us</Link>
    </div>
  );
}

export default Footer;
