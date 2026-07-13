import { useState } from "react";

export default function Ex027() {
  const [conectado, setConectado] = useState(false);

  return (
    <div className="ejercicio">
      <h2>027 - Renderizado condicional</h2>
      <button onClick={() => setConectado(!conectado)}>
        {conectado ? "Cerrar sesión" : "Iniciar sesión"}
      </button>

      {conectado ? (
        <p>Bienvenido de nuevo 👋</p>
      ) : (
        <p>Por favor inicia sesión para continuar.</p>
      )}

      {conectado && <p>Solo los usuarios conectados ven este mensaje extra.</p>}
    </div>
  );
}
