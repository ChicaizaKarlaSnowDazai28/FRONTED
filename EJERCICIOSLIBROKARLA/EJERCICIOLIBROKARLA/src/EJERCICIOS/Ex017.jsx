import { useState } from "react";


export default function Ex017() {
  const [visible, setVisible] = useState(true);
  const [texto, setTexto] = useState("");
  const [aceptado, setAceptado] = useState(false);

  return (
    <div className="ejercicio">
      <h2>017 - Ejercicios useState</h2>

      <h3>Toggle</h3>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      {visible && <p>¡Este texto se puede ocultar!</p>}

      <h3>Texto en vivo</h3>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>Escribiste: {texto}</p>

      <h3>Checkbox</h3>
      <label>
        <input
          type="checkbox"
          checked={aceptado}
          onChange={(e) => setAceptado(e.target.checked)}
        />
        Acepto los términos
      </label>
      <p>{aceptado ? "Gracias por aceptar" : "Debes aceptar para continuar"}</p>
    </div>
  );
}
