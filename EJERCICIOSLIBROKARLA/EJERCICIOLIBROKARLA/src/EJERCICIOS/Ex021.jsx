// Demuestra composición de componentes: un componente padre usa varios hijos
function Saludo() {
  return <p>¡Hola! Soy un componente hijo.</p>;
}

function Despedida() {
  return <p>Adiós, hasta la próxima 👋</p>;
}

export default function Ex021() {
  return (
    <div className="ejercicio">
      <h2>021 - Componentes</h2>
      <Saludo />
      <Despedida />
      <p>Un componente es una función que devuelve JSX y puede reutilizarse las veces que se necesite.</p>
    </div>
  );
}
