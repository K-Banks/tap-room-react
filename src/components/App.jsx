import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header.jsx';
import Body from './Body.jsx';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Body}/>
      </Switch>
    </div>
  );
}

export default App;
