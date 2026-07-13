function Usuario({ nombre, esPremium }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 8, marginBottom: 6 }}>
      <strong>{nombre}</strong>{" "}
      {esPremium ? <span>⭐ Premium</span> : <span>Cuenta gratuita</span>}
    </div>
  );
}

export default function Ex028() {
  return (
    <div className="ejercicio">
      <h2>028 - Ejercicio props con renderizado condicional</h2>
      <Usuario nombre="Ana" esPremium={true} />
      <Usuario nombre="Luis" esPremium={false} />
    </div>
  );
}
