import { useState } from "react";


export default function Ex018() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit = celsius === "" ? "" : (parseFloat(celsius) * 9 / 5 + 32).toFixed(1);

  return (
    <div className="ejercicio">
      <h2>018 - Ejercicio useState: Grados</h2>
      <input
        type="number"
        placeholder="Grados Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
      {fahrenheit !== "" && <p>Resultado: {fahrenheit} °F</p>}
      <p><small>Con useState el resultado se actualiza en vivo mientras escribes, sin botón.</small></p>
    </div>
  );
}
