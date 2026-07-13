import { useState } from "react";
import escenas from "../data/cuento";

export default function Ex050() {
  const [escenaActual, setEscenaActual] = useState("inicio");
  const escena = escenas[escenaActual];

  return (
    <div className="ejercicio">
      <h2>050 - Cuento interactivo</h2>
      <p>{escena.texto}</p>
      <img src={escena.imagen} alt={escenaActual} width={280} />
      <ul>
        {escena.opciones.map((op, i) => (
          <li key={i}>
            <button onClick={() => setEscenaActual(op.destino)}>{op.texto}</button>
          </li>
        ))}
      </ul>
      <p><small>Este es el primer paso del proyecto final (lecciones 050-055 en el libro).</small></p>
    </div>
  );
}
