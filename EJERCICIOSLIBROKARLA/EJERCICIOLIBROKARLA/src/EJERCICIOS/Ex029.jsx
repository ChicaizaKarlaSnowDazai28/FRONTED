import { useState } from "react";


function Viaje({ destino, diasRestantes }) {
  let estado;
  if (diasRestantes > 0) estado = `Faltan ${diasRestantes} día(s) para viajar a ${destino}`;
  else if (diasRestantes === 0) estado = `¡Hoy viajas a ${destino}! ✈️`;
  else estado = `Ya visitaste ${destino}`;

  return <p>{estado}</p>;
}

export default function Ex029() {
  const [dias, setDias] = useState(5);

  return (
    <div className="ejercicio">
      <h2>029 - Ejercicio Viaje</h2>
      <input
        type="number"
        value={dias}
        onChange={(e) => setDias(parseInt(e.target.value) || 0)}
      />
      <Viaje destino="Galápagos" diasRestantes={dias} />
    </div>
  );
}
