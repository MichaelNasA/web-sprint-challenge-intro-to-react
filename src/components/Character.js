// Write your Character component here

import React from 'react';

const Character = (props) => {

  return (
    <div className="App">
          <h2>{props.name}</h2>
          <p>Height: {props.height}</p>
          <p>Mass: {props.mass}</p>
    </div>
  );
}

export default Character;
