import { useState } from "react";
import styled from "styled-components";
import workouts from "../data/workouts";

const ImagenDestacada = styled.img`
  border-radius: 12px;
  border: 4px solid #4f46e5;
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.4);
`;

export default function Ex043() {
  const [indice, setIndice] = useState(0);
  const actual = workouts[indice];

  const cambiar = (direccion) => {
    setIndice((i) => (i + direccion + workouts.length) % workouts.length);
  };

  return (
    <div className="ejercicio">
      <h2>043 - Cambiar de workout</h2>
      <h3>{actual.title}</h3>
      <ImagenDestacada src={actual.image} alt={actual.title} width={280} />
      <ul>
        {actual.exercises.map((ex, i) => (
          <li key={i}>{ex}</li>
        ))}
      </ul>
      <button onClick={() => cambiar(-1)}>← Anterior</button>{" "}
      <button onClick={() => cambiar(1)}>Siguiente →</button>
    </div>
  );
}
