export default function Ex005() {
  return (
    <div className="ejercicio">
      <h2>005 - Instalación de NodeJS y Git</h2>
      <p>
        Node.js provee el entorno de ejecución de JavaScript fuera del
        navegador (npm/npx para instalar dependencias y correr Vite). Git se
        usa para versionar el proyecto y luego subirlo a GitHub.
      </p>
      <pre>{`node -v
npm -v
git --version`}</pre>
    </div>
  );
}
