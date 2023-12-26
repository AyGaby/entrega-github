// reutilizar de Buscador.

import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Guardados.css";
import { Link } from "react-router-dom";

const API_BASE_URL = "http://localhost:3000/api/v1/users";

const Guardados = () => {
  const [savedItems, setSavedItems] = useState([]);
  const filterDeleteItem = (id) => {
    const filteredlist = savedItems.filter((e) => e._id != id);
    setSavedItems(filteredlist);
  };
  useEffect(() => {
    // Llama a la API para obtener la lista de elementos guardados
    const fetchSavedItems = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}`);
        console.log(response);
        setSavedItems(response.data.result.users); // Asume que la API devuelve un array de elementos guardados
      } catch (error) {
        console.error("Error fetching saved items: ", error);
      }
    };

    fetchSavedItems();
  }, []); // Se ejecuta solo una vez al cargar la página

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      // Actualiza la lista después de eliminar
      //   setSavedItems((prevItems) => prevItems.filter((item) => item.id !== id));
      filterDeleteItem(id);
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  return (
    <div>
      <div className="guardados-container">
        <h3>※ Saved ※</h3>
        <ul>
          {savedItems.map((item) => (
            <li className="result-guardados" key={item.id}>
              {item.name}
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <Link to="/Buscador">◀ Keep Searching</Link>
      </div>
    </div>
  );
};

export default Guardados;
