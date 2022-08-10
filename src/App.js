import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {


  
  const [name, setName] = useState([{}]);

  useEffect(() => {
    fetch('http://74.208.169.34:9100/restaurant/all') 
    .then(res => res.json()) 
    .then(res => setName(res));
    console.log("name", name)
    
  }, []); 

  return <><div className="users">
    {name.map(user => (
      <div key={user}>
        <h2>
          Name: {user.name} id: {user.id}
        </h2>
      </div>
    ))}
  </div>
  <div>
      <video width="320" height="240" autoPlay controls muted >
        <source id="music" src="http://74.208.169.34/videos/MexiquenseTV.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
    </div>
    </>;
}

export default App;
