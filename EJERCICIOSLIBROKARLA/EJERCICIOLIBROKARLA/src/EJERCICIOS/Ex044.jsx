import { useState } from "react";
import preguntas from "../data/trivia";

export default function Ex044() {
  const [indice] = useState(0);
  const actual = preguntas[indice];

  return (
    <div className="ejercicio">
      <h2>044 - Hacer un trivial</h2>
      <p>Primer paso: mostrar la primera pregunta del juego.</p>
      <h3>{actual.pregunta}</h3>
    </div>
  );
}
