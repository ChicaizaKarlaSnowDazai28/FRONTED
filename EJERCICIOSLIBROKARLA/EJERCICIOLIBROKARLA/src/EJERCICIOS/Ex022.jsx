import { useState } from "react";

function ConversorEuroDolar({ tasa }) {
  const [euros, setEuros] = useState("");
  const dolares = euros ? (parseFloat(euros) * tasa).toFixed(2) : "";
  return (
    <div>
      <input
        type="number"
        placeholder="Euros"
        value={euros}
        onChange={(e) => setEuros(e.target.value)}
      />
      {dolares && <p>{euros} € = {dolares} $</p>}
    </div>
  );
}

export default function Ex022() {
  return (
    <div className="ejercicio">
      <h2>022 - Ejercicio componentes: Euros a Dólares</h2>
      <p>El componente <code>ConversorEuroDolar</code> recibe la tasa como prop.</p>
      <ConversorEuroDolar tasa={1.08} />
    </div>
  );
}
