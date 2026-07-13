import { useRef, useState } from "react";

// Conversor de Euros a Dólares usando useRef para leer el input
export default function Ex013() {
  const inputRef = useRef(null);
  const [resultado, setResultado] = useState(null);
  const TASA = 1.08; 

  const convertir = () => {
    const euros = parseFloat(inputRef.current.value) || 0;
    setResultado((euros * TASA).toFixed(2));
  };

  return (
    <div className="ejercicio">
      <h2>013 - Ejercicio useRef: Euros a Dólares</h2>
      <input ref={inputRef} type="number" placeholder="Cantidad en euros" />
      <button onClick={convertir}>Convertir</button>
      {resultado !== null && <p>Resultado: ${resultado}</p>}
    </div>
  );
}
