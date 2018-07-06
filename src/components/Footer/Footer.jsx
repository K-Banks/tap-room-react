import React from 'react';
import styles from './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default Footer;