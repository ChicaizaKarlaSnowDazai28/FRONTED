import { useState } from "react";
import styled from "styled-components";
import workouts from "../data/workouts";

const ImagenDestacada = styled.img`
  border-radius: 12px;
  border: 4px solid #4f46e5;
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.4);
`;

export default function Ex042() {
  const [actual] = useState(workouts[0]);

  return (
    <div className="ejercicio">
      <h2>042 - Destacando la imagen</h2>
      <h3>{actual.title}</h3>
      <ImagenDestacada src={actual.image} alt={actual.title} width={280} />
    </div>
  );
}
