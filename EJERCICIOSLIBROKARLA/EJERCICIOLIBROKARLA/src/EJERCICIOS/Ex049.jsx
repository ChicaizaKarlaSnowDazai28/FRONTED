import { useState, useMemo } from "react";
import preguntas from "../data/trivia";

function barajar(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Ex049() {
  // Se barajan las preguntas y, dentro de cada una, las opciones, una sola vez al montar
  const preguntasBarajadas = useMemo(
    () =>
      barajar(preguntas).map((p) => ({ ...p, opciones: barajar(p.opciones) })),
    []
  );

  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const actual = preguntasBarajadas[indice];

  const responder = (op) => {
    setSeleccion(op);
    if (op === actual.correcta) setPuntaje((p) => p + 1);
  };

  const siguiente = () => {
    if (indice + 1 < preguntasBarajadas.length) {
      setIndice((i) => i + 1);
      setSeleccion(null);
    } else {
      setTerminado(true);
    }
  };

  return (
    <div className="ejercicio">
      <h2>049 - Hacer un trivial: Randomizar preguntas y respuestas</h2>
      {!terminado ? (
        <>
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
            <>
              <p>{seleccion === actual.correcta ? "✅ Correcto" : `❌ Era: ${actual.correcta}`}</p>
              <button onClick={siguiente}>Siguiente</button>
            </>
          )}
        </>
      ) : (
        <p>Juego terminado. Puntaje: {puntaje} / {preguntasBarajadas.length}</p>
      )}
    </div>
  );
}
