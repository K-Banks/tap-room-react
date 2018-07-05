import React from 'react';
import KegList from './KegList/KegList.jsx';
import Edit from './Edit/Edit.jsx';

function UserBody(){
  return (
    <div>
      <KegList/>
      <Edit/>
    </div>
  );
}

export default UserBody;
