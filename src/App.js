import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
    .then(res => res.json()) 
    .then(res => setName(res.name)); 
  }, []); 
  return <p>{name}</p>;
}

export default App;
