import { useEffect, useState } from "react";
import { fetchUser } from "./api"; // Import the fetch function
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null); // Add error state
  useEffect(() => {
    fetchUser(1)
      .then((data) => {
        setUsername(data.name);
      })
      .catch((err) => {
        setError("Failed to fetch user"); // Set error message on failure
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {error ? (
          <p>Bad User</p>
        ) : (
          <p>{username ? `Hello, ${username}...` : "Loading..."}</p>
        )}
      </header>
    </div>
  );
}

export default App;
