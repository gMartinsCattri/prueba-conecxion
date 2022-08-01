import {useState, useEffect} from 'react';

function App() {
  // ✅ State is initialized to `[]`
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('http://74.208.169.34:8081/restaurant/all', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });

      const data = await response.json();

      setUsers(data.results);
      console.log("users", users)
      console.log("status", data.status)
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
            Name: {user.name} {user.url}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;