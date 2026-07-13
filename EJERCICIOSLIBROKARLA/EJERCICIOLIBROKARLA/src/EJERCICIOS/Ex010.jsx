export default function Ex010() {
  const activo = true;
  const estilo = { color: activo ? "green" : "red", fontWeight: "bold" };
  return (
    <div className="ejercicio">
      <h2>010 - Ejemplos de JSX</h2>
      <p style={estilo}>Estado: {activo ? "Activo" : "Inactivo"}</p>
      <img
        src="https://placehold.co/120x80?text=JSX"
        alt="ejemplo"
        width={120}
      />
      <div className="caja" style={{ border: "1px solid #ccc", padding: 8, marginTop: 8 }}>
        Un div con estilos en línea (objeto JS con camelCase).
      </div>
    </div>
  );
}
