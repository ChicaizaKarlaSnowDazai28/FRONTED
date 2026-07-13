export default function Ex007() {
  return (
    <div className="ejercicio">
      <h2>007 - Estructura de la aplicación recién creada</h2>
      <pre>{`nombre-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx      <- componente raíz
│   ├── main.jsx      <- punto de entrada, monta <App /> en el DOM
│   └── index.css
├── index.html        <- contiene el <div id="root">
├── package.json       <- scripts y dependencias
└── vite.config.js`}</pre>
      <p>
        <code>main.jsx</code> usa <code>ReactDOM.createRoot</code> para
        renderizar el árbol de componentes dentro del <code>div#root</code>
        de <code>index.html</code>.
      </p>
    </div>
  );
}
