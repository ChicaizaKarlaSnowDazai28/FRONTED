import { useState } from "react";

const parrafos = [
  "Buenas tardes a todos, hoy quiero hablarles de React.",
  "React nos permite construir interfaces basadas en componentes.",
  "Con la práctica constante, cada vez se domina mejor.",
  "Muchas gracias por su atención.",
];

export default function Ex036() {
  const [indice, setIndice] = useState(0);

  const anterior = () => setIndice((i) => Math.max(i - 1, 0));
  const siguiente = () => setIndice((i) => Math.min(i + 1, parrafos.length - 1));

  return (
    <div className="ejercicio">
      <h2>036 - Botones para avanzar y retroceder párrafos</h2>
      <p style={{ fontSize: 20, minHeight: 60 }}>{parrafos[indice]}</p>
      <button onClick={anterior} disabled={indice === 0}>← Anterior</button>{" "}
      <button onClick={siguiente} disabled={indice === parrafos.length - 1}>Siguiente →</button>
      <p><small>Párrafo {indice + 1} de {parrafos.length}</small></p>
    </div>
  );
}
