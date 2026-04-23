import './App.css'
import { useState } from 'react';

function App() {
  const [variable, setVariable] = useState<string>("Jesus");
  const alumno = "pardo";
  const alumnos = ["pardo", "mario", "neuza", "melina"];
  const [contador, setContador] = useState<number>(0);
  const [name, setName] = useState<string>("");

  // 👉 Estado del ejercicio
  const [encendido, setEncendido] = useState<boolean>(false);

  const handleVariable = () => {
    setVariable("Mario");
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <>
      <p>{variable}</p>

      <button 
        onClick={handleVariable} 
        className={contador % 2 === 0 ? "boton1" : "boton2"}
      >
        Enviar
      </button>

      <h2>Contador</h2>
      <p>{contador}</p>

      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(0)}>Reset</button>

      <p>{alumno}</p>

      <h1>Alumnos</h1>
      <ul>
        {alumnos.map((nombre, index) => (
          <li key={index}>
            {nombre} - {index}
          </li>
        ))}
      </ul>

      <h2>Nombre: {name}</h2>
      <input 
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Escribe tu nombre"
      />

      {/* ===== EJERCICIO ===== */}

      <h2>Ejercicio Lista</h2>

      <button onClick={() => setEncendido(!encendido)}>
        {encendido ? "Cerrar Lista" : "Mostrar Lista"}
      </button>

      {encendido && (
        <ul>
          {alumnos.map((nombre, index) => (
            <li
              key={index}
              style={{ color: index % 2 === 0 ? "blue" : "black" }}
            >
              {nombre}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;