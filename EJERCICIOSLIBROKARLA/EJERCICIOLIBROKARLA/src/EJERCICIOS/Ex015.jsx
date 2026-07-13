import { useRef, useState } from "react";

// Superficie de un rectángulo usando useRef
export default function Ex015() {
  const baseRef = useRef(null);
  const alturaRef = useRef(null);
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const base = parseFloat(baseRef.current.value) || 0;
    const altura = parseFloat(alturaRef.current.value) || 0;
    setResultado((base * altura).toFixed(2));
  };

  return (
    <div className="ejercicio">
      <h2>015 - Ejercicio useRef: Superficie de un rectángulo</h2>
      <input ref={baseRef} type="number" placeholder="Base" />
      <input ref={alturaRef} type="number" placeholder="Altura" />
      <button onClick={calcular}>Calcular</button>
      {resultado !== null && <p>Superficie: {resultado} m²</p>}
    </div>
  );
}
