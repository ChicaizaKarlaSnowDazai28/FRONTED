import { useState } from "react";
import styled from "styled-components";
import workouts from "../data/workouts";

const Tarjeta = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  max-width: 320px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

const Titulo = styled.h3`
  color: #4f46e5;
`;

export default function Ex041() {
  const [actual] = useState(workouts[0]);

  return (
    <div className="ejercicio">
      <h2>041 - Aplicación de rutinas deportivas: Styled components</h2>
      <Tarjeta>
        <Titulo>{actual.title}</Titulo>
        <img src={actual.image} alt={actual.title} width={280} />
      </Tarjeta>
    </div>
  );
}
