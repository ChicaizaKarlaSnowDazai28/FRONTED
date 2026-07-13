import { useState } from "react";

export default function Ex016() {
  const [contador, setContador] = useState(0);

  return (
    <div className="ejercicio">
      <h2>016 - Estados (useState)</h2>
      <p>
        A diferencia de <code>useRef</code>, cambiar un estado con{" "}
        <code>useState</code> provoca que el componente se vuelva a renderizar.
      </p>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}
