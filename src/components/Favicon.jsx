import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

ReactDOM.render(
  <div>
    <Favicon url='./assets/images/favicon.ico'/>
  </div>
  , document.getElementById('root')
);

export default Favicon;
