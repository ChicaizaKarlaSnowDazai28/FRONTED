import { useState } from "react";
import preguntas from "../data/trivia";

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const popupStyle = {
  background: "white",
  padding: 24,
  borderRadius: 10,
  minWidth: 260,
  textAlign: "center",
};

export default function Ex048() {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const actual = preguntas[indice];

  const responder = (op) => {
    setSeleccion(op);
    setMostrarPopup(true);
  };

  const cerrarPopup = () => {
    setMostrarPopup(false);
    setSeleccion(null);
    setIndice((i) => (i + 1) % preguntas.length);
  };

  return (
    <div className="ejercicio">
      <h2>048 - Hacer un trivial: Mostrar popups</h2>
      <h3>{actual.pregunta}</h3>
      <ul>
        {actual.opciones.map((op, i) => (
          <li key={i}>
            <button onClick={() => responder(op)}>{op}</button>
          </li>
        ))}
      </ul>

      {mostrarPopup && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <p>
              {seleccion === actual.correcta
                ? "✅ ¡Correcto!"
                : `❌ Incorrecto. Era: ${actual.correcta}`}
            </p>
            <button onClick={cerrarPopup}>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}
