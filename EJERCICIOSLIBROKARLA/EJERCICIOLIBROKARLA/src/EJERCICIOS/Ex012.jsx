import { useRef } from "react";

export default function Ex012() {
  const nombreRef = useRef(null);
  const edadRef = useRef(null);

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombreRef.current.value}, Edad: ${edadRef.current.value}`);
  };

  return (
    <div className="ejercicio">
      <h2>012 - Recogida de datos</h2>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre: <input ref={nombreRef} type="text" />
        </label>
        <br />
        <label>
          Edad: <input ref={edadRef} type="number" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <p>Este ejercicio usa <code>useRef</code> para leer valores del formulario sin re-renderizar en cada tecla.</p>
    </div>
  );
}
