import './App.css'
import { useState } from 'react';

function App() {
const [variable, setVariable] = useState<string>("Jesus");
const alumno = "pardo"
const alumnos = ["pardo", "mario", "neuza", "melina"]
  const handleVariable = () => {
    setVariable("Mario");
  }
  return (
    <>
    <p>{variable}</p>
    <button onClick={handleVariable}>Enviar</button>
    <p>{alumno}</p>
    <h1>Alumnos</h1>
    <p>{alumnos.map((nombre, index) => (
      <li key={index}>
        {nombre} - {index}
      </li>
    ))}</p>
    </>
  );
}

export default App
