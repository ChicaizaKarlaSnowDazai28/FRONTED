import { useState } from "react";

export default function Ex030() {
  const [tareas, setTareas] = useState(["Estudiar React", "Hacer ejercicio", "Leer"]);
  const [nueva, setNueva] = useState("");

  const agregar = () => {
    if (!nueva.trim()) return;
    setTareas([...tareas, nueva]);
    setNueva("");
  };

  const eliminar = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="ejercicio">
      <h2>030 - Arrays</h2>
      <input value={nueva} onChange={(e) => setNueva(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={agregar}>Agregar</button>
      <ul>
        {tareas.map((tarea, i) => (
          <li key={i}>
            {tarea} <button onClick={() => eliminar(i)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
