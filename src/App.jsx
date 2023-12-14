import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Buscador from "./pages/Buscador";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Buscador" element={<Buscador />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
