import React from 'react';

function App() {
  // ✅ State is initialized to `[]`
  fetch('http://74.208.169.34:8081/restaurant/all')
.then(response => response.json())
.then(data => {
    console.log(data)
    
    for(const key in data) {
        console.log(data[key]);
        console.log(data[key].name);
    }

    //console.log(data);
})
.catch(err => console.log(err));

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default App;
