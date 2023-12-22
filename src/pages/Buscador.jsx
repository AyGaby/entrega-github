import { useState } from "react"; //useState de React. Gestiona el estado en componentes de función.
import logo from "../assets/logui.png";
import UserItem from "../components/UserItem";
import RepoItem from "../components/RepoItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1";
const GIT_API_URL = "https://api.github.com";

const Buscador = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [typeSearch, setTypeSearch] = useState("users", "repos");

  // Estados para almacenar resultados de usuarios y repositorio.
  const [userResults, setUserResults] = useState([]);
  const [repoResults, setRepoResults] = useState([]);

  // Estado para almacenar el elemento seleccionado
  const [selectedItem, setSelectedItem] = useState(null);

  const saveSearch = async (item) => {
    try {
      let databody = {};
      const type = typeSearch === "users" ? "users" : "repos";
      if (type === "users") {
        databody = {
          id: item.id,
          name: item.login,
          avatar_url: item.avatar_url,
          repos_url: item.repos_url,
          description: item.description,
        };
      } else {
        databody = {
          name: item.name,
          score: item.score,
          description: item.description,
        };
      }

      const response = await axios.post(`${API_BASE_URL}/${type}`, databody);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para manejar la búsqueda
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      console.log(typeSearch);
      const response = await axios.get(
        `${GIT_API_URL}/search/${typeSearch}?q=${query}`
      );

      if (response.data) {
        setUserResults(response.data.items);
      }

      if (response.data && typeSearch === "repositories") {
        setRepoResults(response.data.items);
      }

      //setRepoResults(repoData.items || []);
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
          <form>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter username or repository"
            />
            <select
              value={typeSearch}
              onChange={(event) => {
                setTypeSearch(event.target.value);
              }}
            >
              <option value="users">Users</option>
              <option value="repositories">Repositories</option>
            </select>
          </form>
          <button type="button" onClick={handleSearch}>
            ☆Good Luck☆
          </button>
        </div>
        <div className="results">
          <h2>{typeSearch}</h2>
          {userResults.map((item) => (
            <UserItem
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
          {repoResults !== null &&
            repoResults.map((item) => (
              <RepoItem
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          {!!selectedItem && (
            <div className="details">
              <h2>Details</h2>
              <p>Full Name: {selectedItem?.login}</p>
              <p>Score: {selectedItem?.score}</p>
            </div>
          )}
          {!!selectedItem && (
            <button
              className="guardar"
              onClick={() => saveSearch(selectedItem)}
            >
              Save ☆
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buscador;
