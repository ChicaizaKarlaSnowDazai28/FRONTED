import { useState } from "react";

const parrafos = [
  "Buenas tardes a todos, hoy quiero hablarles de React.",
  "React nos permite construir interfaces basadas en componentes.",
  "Con la práctica constante, cada vez se domina mejor.",
  "Muchas gracias por su atención.",
];

export default function Ex035() {
  const [indice, setIndice] = useState(0);

  return (
    <div className="ejercicio">
      <h2>035 - Aplicación para memorizar un speech</h2>
      <p style={{ fontSize: 20, minHeight: 60 }}>{parrafos[indice]}</p>
      <p><small>Párrafo {indice + 1} de {parrafos.length}</small></p>
    </div>
  );
}
