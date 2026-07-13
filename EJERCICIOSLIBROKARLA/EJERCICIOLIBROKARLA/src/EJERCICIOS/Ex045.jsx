import { useState } from "react";
import preguntas from "../data/trivia";

export default function Ex045() {
  const [indice, setIndice] = useState(0);
  const actual = preguntas[indice];

  return (
    <div className="ejercicio">
      <h2>045 - Preguntas, respuestas y variaciones</h2>
      <h3>{actual.pregunta}</h3>
      <ul>
        {actual.opciones.map((op, i) => (
          <li key={i}>{op}</li>
        ))}
      </ul>
      <button
        onClick={() => setIndice((i) => (i + 1) % preguntas.length)}
      >
        Siguiente pregunta
      </button>
    </div>
  );
}
