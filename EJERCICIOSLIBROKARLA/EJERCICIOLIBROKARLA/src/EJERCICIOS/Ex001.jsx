export default function Ex001() {
  return (
    <div className="ejercicio">
      <h2>001 - ¿Qué es React?</h2>
      <p>
        React es una librería de JavaScript para construir interfaces de
        usuario mediante componentes reutilizables. Permite describir cómo
        debe verse la UI en cada estado de la aplicación, y React se encarga
        de actualizar el DOM de forma eficiente cuando ese estado cambia.
      </p>
      <ul>
        <li>Basado en componentes</li>
        <li>Usa un DOM virtual para optimizar renderizados</li>
        <li>Flujo de datos unidireccional (de padres a hijos vía props)</li>
      </ul>
      <p>Este mismo texto que ves ya es una prueba de un componente React funcionando 🎉</p>
    </div>
  );
}
