import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState([{}]);

  useEffect(() => {
    fetch('http://74.208.169.34:8081/restaurant/all') 
    .then(res => res.json()) 
    .then(res => setName(res.results));
    console.log("name", name)
    
  }, [name]); 

//   const listItems = name.map((names) =>
//   // Correct! Key should be specified inside the array.
//   console.log(names)
// );
  return <div className="users">
  {name.map(user => (
        <div key={user}>
          <h2>
            Name: {user.name} id: {user.id}
          </h2>
        </div>
      ))}
</div>;
}

export default App;
