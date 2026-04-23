import './App.css'
import { useState } from 'react';

function App() {
const [variable, setVariable] = useState<string>("Jesus");
const alumno = "pardo";
const alumnos = ["pardo", "mario", "neuza", "melina"];
const [contador, setContador] = useState<number>(0);
const [name, setName] = useState<string>("");
  
const handleVariable = () => {
    setVariable("Mario");
  }

  const handleName =(e:any)=>{
    setName(e.target.value);
  }

  return (
    <>
    <p>{variable}</p>
    <button onClick={handleVariable} className={contador%2==0 ? "boton1" : "boton2"}>Enviar</button>
    

    <h2>Contador</h2>
    <p>{contador}</p>
    <p>{contador}</p>
    <p>{contador}</p>
    <button onClick={() => setContador(contador + 1)}>+1</button>
    <button onClick={() => setContador(0)}>Reset</button>

    <p>{alumno}</p>
    <h1>Alumnos</h1>
    <p>{alumnos.map((nombre, index) => (
      <li key={index}>
        {nombre} - {index}
      </li>
    ))}</p>

    <h2>nombre: {name}</h2>
    <input 
    type="text"
    value={name}
    onChange={handleName}
    placeholder='Escribe tu nombre'
    />
    </>
  );
}

export default App
