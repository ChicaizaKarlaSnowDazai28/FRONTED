import { useState, useEffect } from "react";
import workouts from "../data/workouts";

export default function Ex039() {
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    setTitulo(workouts[0].title);
  }, []);

  return (
    <div className="ejercicio">
      <h2>039 - Carga del primer título</h2>
      <p>Título cargado con useEffect al montar: <strong>{titulo}</strong></p>
    </div>
  );
}
