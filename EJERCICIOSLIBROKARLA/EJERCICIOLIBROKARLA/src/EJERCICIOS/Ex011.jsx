import { useState } from "react";

export default function Ex011() {
  const [clics, setClics] = useState(0);
  const frutas = ["Manzana", "Banana", "Pera", "Uva"];

  return (
    <div className="ejercicio">
      <h2>011 - Ejemplos de JSX: eventos y arrays</h2>
      <button onClick={() => setClics(clics + 1)}>Clic aquí</button>
      <p>Veces pulsado: {clics}</p>

      <h3>Lista de frutas (array.map)</h3>
      <ul>
        {frutas.map((fruta, i) => (
          <li key={i}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}
