import { useState } from "react";
import styled from "styled-components";
import preguntas from "../data/trivia";

const Tarjeta = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  max-width: 420px;
`;

const OpcionBoton = styled.button`
  display: block;
  width: 100%;
  margin: 6px 0;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  background: ${(props) => (props.$correcta ? "#bbf7d0" : "white")};
  cursor: pointer;

  &:hover {
    background: #eef2ff;
  }
`;

export default function Ex047() {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const actual = preguntas[indice];

  return (
    <div className="ejercicio">
      <h2>047 - Hacer un trivial: Styled components</h2>
      <Tarjeta>
        <h3>{actual.pregunta}</h3>
        {actual.opciones.map((op, i) => (
          <OpcionBoton
            key={i}
            $correcta={seleccion && op === actual.correcta}
            onClick={() => setSeleccion(op)}
            disabled={seleccion !== null}
          >
            {op}
          </OpcionBoton>
        ))}
        {seleccion && (
          <button
            onClick={() => {
              setSeleccion(null);
              setIndice((i) => (i + 1) % preguntas.length);
            }}
          >
            Siguiente
          </button>
        )}
      </Tarjeta>
    </div>
  );
}
