import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("/api/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.name);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        
          <p>{username ? `Hello, ${username}...` : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
