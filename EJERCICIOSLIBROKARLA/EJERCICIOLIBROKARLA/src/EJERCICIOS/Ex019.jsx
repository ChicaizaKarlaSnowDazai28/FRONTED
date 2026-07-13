import { useState } from "react";


export default function Ex019() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");

  const superficie = base && altura ? (parseFloat(base) * parseFloat(altura)).toFixed(2) : null;

  return (
    <div className="ejercicio">
      <h2>019 - Ejercicio useState: Calcular superficie</h2>
      <input type="number" placeholder="Base" value={base} onChange={(e) => setBase(e.target.value)} />
      <input type="number" placeholder="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
      {superficie && <p>Superficie: {superficie} m²</p>}
    </div>
  );
}
