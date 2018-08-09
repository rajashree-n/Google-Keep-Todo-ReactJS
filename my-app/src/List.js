import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => 
      <div class="box one"><div id="shade"><div class="header" id="header">
      <li key={index}>{item}</li>
      </div><div class="container"><center><button class="delete mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">delete</i> </button> <button class="strike mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">done</i> </button></center> </div></div></div>
      )
    }
  </ul>
);

export default List;