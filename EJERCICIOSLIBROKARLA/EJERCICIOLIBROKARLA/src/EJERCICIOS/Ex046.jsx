import { useState } from "react";
import preguntas from "../data/trivia";

export default function Ex046() {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const actual = preguntas[indice];

  const responder = (opcion) => {
    setSeleccion(opcion);
  };

  const siguiente = () => {
    setSeleccion(null);
    setIndice((i) => (i + 1) % preguntas.length);
  };

  return (
    <div className="ejercicio">
      <h2>046 - Respuesta correcta</h2>
      <h3>{actual.pregunta}</h3>
      <ul>
        {actual.opciones.map((op, i) => (
          <li key={i}>
            <button onClick={() => responder(op)} disabled={seleccion !== null}>
              {op}
            </button>
          </li>
        ))}
      </ul>
      {seleccion && (
        <p>
          {seleccion === actual.correcta
            ? "✅ ¡Correcto!"
            : `❌ Incorrecto. La respuesta era: ${actual.correcta}`}
        </p>
      )}
      {seleccion && <button onClick={siguiente}>Siguiente</button>}
    </div>
  );
}
