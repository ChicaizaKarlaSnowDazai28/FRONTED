import { useState } from "react";
import workouts from "../data/workouts";

export default function Ex040() {
  const [actual] = useState(workouts[0]);

  return (
    <div className="ejercicio">
      <h2>040 - Mostrar imágenes</h2>
      <h3>{actual.title}</h3>
      <img src={actual.image} alt={actual.title} width={300} />
    </div>
  );
}
