import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
        
      .then((res) => {
        console.log('response', res);
        setCharacters(res.data);
      })
      .catch(() => {
        console.log('axios')
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
