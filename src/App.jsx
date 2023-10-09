import { useState } from "react";
import "./App.css";
import logo from "./assets/logui.png";

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div className="contenedor">
      <div className="nav">
        <img src={logo} />
        <h1>Busca un repositorio</h1>
      </div>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ingresa el nombre del usuario"
        />
        <button onClick={fetchUser}>Buscar</button>
      </div>

      <article>
        {user && (
          <div className="avatar">
            <img src={user.avatar_url} alt="avatar" />
            <h4>{user.login}</h4>
            <p>{user.bio}</p>
          </div>
        )}
      </article>
    </div>
  );
}

export default App;
