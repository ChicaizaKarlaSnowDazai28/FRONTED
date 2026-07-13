// Props: datos que un componente padre pasa a un componente hijo
function Tarjeta({ nombre, edad }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 8, marginBottom: 6 }}>
      <strong>{nombre}</strong> — {edad} años
    </div>
  );
}

export default function Ex024() {
  return (
    <div className="ejercicio">
      <h2>024 - Props</h2>
      <Tarjeta nombre="Ana" edad={22} />
      <Tarjeta nombre="Luis" edad={19} />
      <Tarjeta nombre="Marta" edad={25} />
    </div>
  );
}
