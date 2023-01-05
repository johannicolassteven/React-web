
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from "react"

function App() {

  const [numClics, setNumClics] = useState(0);

  const sumarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <p>Contador de Clics por NICOLAS ESPINOSA</p>
      </div>
      <div className='contenedor-principal'>

        <Contador numClics = {numClics}/>

        <Boton
          texto= "Click para contar"
          esBotonDeClic = {true}
          manejarClic = {sumarClic}/>

        <Boton
          texto="reiniciar"
          esBotonDeClic = {false}
          manejarClic = {reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
