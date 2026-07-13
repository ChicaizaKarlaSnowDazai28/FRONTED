import { useState } from "react";


function BotonHijo({ onEnviar }) {
  return <button onClick={() => onEnviar("¡Mensaje desde el hijo!")}>Enviar al padre</button>;
}

export default function Ex025() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="ejercicio">
      <h2>025 - Enviar props del componente hijo al padre</h2>
      <BotonHijo onEnviar={setMensaje} />
      {mensaje && <p>Padre recibió: {mensaje}</p>}
    </div>
  );
}
