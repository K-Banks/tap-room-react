import React from 'react';
import styles from './Error404.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  return(
    <div>
      <h3>This page, {props.location.pathname}, does not exist.</h3>
      <h4><Link to='/'>Click here to go back to the homepage</Link></h4>
      <img src='http://junkiemonkeys.com/wp-content/uploads/2014/08/RIPStudioGhibli.png' alt='Error 404: Page not found'/>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object,
};

export default Error404;
