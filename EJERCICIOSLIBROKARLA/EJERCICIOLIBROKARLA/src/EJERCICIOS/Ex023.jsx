import { useState } from "react";

function ConversorGrados() {
  const [celsius, setCelsius] = useState("");
  const fahrenheit = celsius ? (parseFloat(celsius) * 9 / 5 + 32).toFixed(1) : "";
  return (
    <div>
      <input
        type="number"
        placeholder="Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
      {fahrenheit && <p>{celsius} °C = {fahrenheit} °F</p>}
    </div>
  );
}

export default function Ex023() {
  return (
    <div className="ejercicio">
      <h2>023 - Ejercicio componentes: Grados</h2>
      <ConversorGrados />
    </div>
  );
}
