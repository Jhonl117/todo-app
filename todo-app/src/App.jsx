import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Todos from "./Pages/Todos";
import Registro from "./Pages/Registro";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/todos">Todos</Link> | 
        <Link to="/registro">Registro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}
