import React from 'react';
import Keg from './Keg/Keg.jsx';
import Main from './Main/Main.jsx';
import Edit from './Edit/Edit.jsx';

function Body(){
  return (
    <div>
      <p>HELLO!!!</p>
      <Keg/>
      <Main/>
      <Edit/>
    </div>
  );
}

export default Body;
