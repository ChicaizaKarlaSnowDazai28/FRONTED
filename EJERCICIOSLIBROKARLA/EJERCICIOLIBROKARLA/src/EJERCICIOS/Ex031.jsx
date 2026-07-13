import "./Ex031.css";

export default function Ex031() {
  return (
    <div className="ejercicio">
      <h2>031 - Estilos</h2>
      <p>Tres formas de aplicar estilos en React:</p>
      <div style={{ background: "#eef6ff", padding: 8, marginBottom: 6 }}>
        Estilo en línea (objeto JS)
      </div>
      <div className="caja-css">Estilo con clase CSS (Ex031.css)</div>
    </div>
  );
}
