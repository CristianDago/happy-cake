import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
