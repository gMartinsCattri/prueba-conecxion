import {useState, useEffect} from 'react';

function App() {
  // ✅ State is initialized to `[]`
  const [users, setUsers] = useState([]);

  useEffect(() => {
     function getUsers() {
      const response =  fetch('http://74.208.169.34:8081/restaurant/all', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });

      const data =  response.json();

      setUsers(data);
    }

    getUsers();
  }, []);

  console.log(users);

  return (
    <div>
      {/* ✅ users is `[]`, until API responds */}
      {users.map(user => (
        <div key={user.name}>
          <h2>
            Name: {user.name} {user.id}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;