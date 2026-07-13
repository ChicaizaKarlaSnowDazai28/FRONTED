export default function Ex006() {
  return (
    <div className="ejercicio">
      <h2>006 - Creación de nuestra primera aplicación</h2>
      <p>Comando usado para generar este mismo proyecto con Vite:</p>
      <pre>{`npm create vite@latest nombre-app -- --template react
cd nombre-app
npm install
npm run dev`}</pre>
      <p>¡Hola mundo desde nuestra primera aplicación React! 👋</p>
    </div>
  );
}
