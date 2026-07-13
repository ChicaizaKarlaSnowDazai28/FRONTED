export default function Ex009() {
  const nombre = "Estudiante";
  const suma = 2 + 3;
  return (
    <div className="ejercicio">
      <h2>009 - JSX</h2>
      <p>JSX permite mezclar HTML con expresiones JavaScript usando llaves {"{ }"}.</p>
      <p>Hola, {nombre}!</p>
      <p>2 + 3 = {suma}</p>
      <p>Fecha actual: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
