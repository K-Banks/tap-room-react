import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header.jsx';
import UserBody from './UserBody.jsx';
import styles from './App.css';

function App(){
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Switch>
        <Route exact path='/' component={UserBody}/>
      </Switch>
    </div>
  );
}

export default App;
