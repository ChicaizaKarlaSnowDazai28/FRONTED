import { useRef, useState } from "react";


export default function Ex014() {
  const inputRef = useRef(null);
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const celsius = parseFloat(inputRef.current.value) || 0;
    setResultado((celsius * 9 / 5 + 32).toFixed(1));
  };

  return (
    <div className="ejercicio">
      <h2>014 - Ejercicio useRef: Grados</h2>
      <input ref={inputRef} type="number" placeholder="Grados Celsius" />
      <button onClick={convertir}>Convertir a °F</button>
      {resultado !== null && <p>Resultado: {resultado} °F</p>}
    </div>
  );
}
