import { useState } from "react";

// Refactor del formulario del Ex012, ahora recogiendo valores con useState
export default function Ex020() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}, Edad: ${edad}`);
  };

  return (
    <div className="ejercicio">
      <h2>020 - Recoger valor con estados en lugar de useRef</h2>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:{" "}
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Edad:{" "}
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <p>Vista previa en vivo: {nombre || "—"}, {edad || "—"} años</p>
    </div>
  );
}
