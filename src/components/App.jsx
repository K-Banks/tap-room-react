import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header.jsx';
import UserBody from './UserBody.jsx';
import Favicon from './Favicon.jsx';

function App(){
  return (
    <div>
      <Favicon/>
      <Header/>
      <Switch>
        <Route exact path='/' component={UserBody}/>
      </Switch>
    </div>
  );
}

export default App;
