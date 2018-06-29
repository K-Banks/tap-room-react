import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Body from './Body.jsx';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Body}/>
      </Switch>
    </div>
  );
}

export default App;
