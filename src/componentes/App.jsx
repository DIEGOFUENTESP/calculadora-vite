import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';
import Boton from '../componentes/Boton';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { useState } from 'react'
import { evaluate } from 'mathjs';
import FreeCodeCampLogo from './FreeCodeCampLogo';
import '../estilos/App.css'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    // Evitar operadores duplicados
    if (val === '+' || val === '-' || val === '*' || val === '/') {
      const ultimoCaracter = input.charAt(input.length - 1);
      if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') {
        return;
      }
    }

    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      // Evitar operadores duplicados al final de la expresión
      const ultimoCaracter = input.charAt(input.length - 1);
      if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') {
        return;
      }
  
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <>
    <div className='App'>
        <FreeCodeCampLogo />
        <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
