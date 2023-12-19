import { useState } from "react"; //useState de React. Gestiona el estado en componentes de función.
import logo from "../assets/logui.png";

import UserItem from "../components/UserItem";
// import RepoItem from "../components/RepoItem";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:3000/api/v1"; // https://api.github.com esto es lo viejo (conectado FRONT CON END?) http://localhost3000/api/v1

const Buscador = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Estados para almacenar resultados de usuarios y repositorio.
  const [userResults, setUserResults] = useState([]);
  // const [repoResults, setRepoResults] = useState([]);
  // Estado para almacenar el elemento seleccionado
  const [selectedItem, setSelectedItem] = useState(null);

  // Función para realizar solicitudes a la API de GitHub
  const fetchData = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {});
    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.statusText}`);
    }
    const body = await response.json();
    console.log(body);
    return body;
  };

  // Función para manejar la búsqueda
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // const userData = await fetchData(`/users`);
      // const repoData = await fetchData(`/search/repositories?q=${query}`);

      const userData = await fetchData(`/users?q=${query}`);

      console.log(userData);

      setUserResults(userData.result.users || []);
      // setRepoResults(repoData.items || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Función para manejar cambios en la entrada de búsqueda
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const NavHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <button onClick={NavHome}>◀ HOME</button>
      </div>
      <div className="App">
        <div className="form-container">
          <div className="logo-container">
            <div className="glitch-wrapper">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <h4>Search</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter username or repository name"
            />
            <button type="submit">☆Good Luck☆</button>
          </form>
        </div>
        <div className="results">
          <h2>Users</h2>
          {userResults.map((item) => (
            <UserItem
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
          <h2>Repositories</h2>
          {/* {repoResults.map((item) => (
            <RepoItem
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))} */}
        </div>
        {!!selectedItem && (
          <div className="details">
            <h2>Details</h2>
            <p>Full Name: {selectedItem?.login}</p>
            <p>Score: {selectedItem?.score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buscador;
