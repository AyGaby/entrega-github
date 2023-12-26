import { useNavigate } from "react-router-dom";
import logo from "../assets/logui.png";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const NavBuscador = () => {
    navigate("/Buscador");
  };

  return (
    <div>
      <div className="home-container">
        <div className="logo-Home">
          <img src={logo} alt="Logo" />

          <h1>WELCOME TO GITHUB SEARCH</h1>
          <button onClick={NavBuscador}>GO ▶</button>
          {/* <button onClick={Saved}> SAVED ▶</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
