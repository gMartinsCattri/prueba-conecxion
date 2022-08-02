import {useState, useEffect} from 'react';

function App() {
  // ✅ State is initialized to `[]`
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('http://74.208.169.34:2020/images', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });

      const data = await response.json();

      setUsers(data);
      console.log("users", users)
      console.log("status", response)
    }

    getUsers();
  }, [users]);

  console.log(users);

  return (
    <div>
      {/* ✅ users is `[]`, until API responds */}
      {users.map(user => (
        <div key={user}>
          <h2>
            Name: {user}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;