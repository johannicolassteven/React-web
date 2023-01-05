import {BrowserRouter, Routes, Route } from "react"
import './App.css';
import { Inicio } from "./componentes/inicio"
import { Personaje } from "./componentes/personaje"


function App() {
  return (
    <div className="contenedor">
      <h1>Hola Mundo</h1>
      <BrowserRouter>
        <Routes>
          <Route Path='/' element={<Inicio></Inicio>}></Route>
          <Route Path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
