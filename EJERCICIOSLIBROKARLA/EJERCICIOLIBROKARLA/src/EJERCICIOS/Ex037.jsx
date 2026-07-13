import { useState, useEffect } from "react";

export default function Ex037() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);
    // función de limpieza: se ejecuta al desmontar el componente
    return () => clearInterval(intervalo);
  }, []); // array vacío = se ejecuta solo una vez al montar

  return (
    <div className="ejercicio">
      <h2>037 - useEffect</h2>
      <p>
        <code>useEffect</code> ejecuta código después del renderizado (efectos
        secundarios): temporizadores, peticiones a APIs, suscripciones, etc.
      </p>
      <p>Segundos transcurridos: {segundos}</p>
    </div>
  );
}
