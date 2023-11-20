import { useState } from "react";
import "./App.css";
import logo from "./assets/logui.png";

import UserItem from "./components/UserItem";
import RepoItem from "./components/RepoItem";

const API_BASE_URL = "https://api.github.com";

function App() {
  const [query, setQuery] = useState("");

  const [userResults, setUserResults] = useState([]);
  const [repoResults, setRepoResults] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {});
    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.statusText}`);
    }
    const body = await response.json();
    console.log(body);
    return body;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const userData = await fetchData(`/search/users?q=${query}`);
      const repoData = await fetchData(`/search/repositories?q=${query}`);

      setUserResults(userData.items || []);
      setRepoResults(repoData.items || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Consider setting some state here to show an error message to the user.
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="logo-container">
          <div className="glitch-wrapper">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <h1>Github Search</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter username or repository name"
          />
          <button type="submit">Search</button>
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
        {repoResults.map((item) => (
          <RepoItem
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>
      {!!selectedItem && (
        <div className="details">
          <h2>Details</h2>
          <p>Full Name: {selectedItem?.login}</p>
          <p>Score: {selectedItem?.score}</p>
        </div>
      )}
    </div>
  );
}

export default App;
