# Ejercicios del libro de React (001-050)

Proyecto de React + Vite con la resolución de los 50 ejercicios del libro
(3er Parcial - Frontend). Cada ejercicio tiene su propia ruta y se puede
navegar desde el índice en la página principal.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador. Ahí verás el índice con los
50 ejercicios enlazados; haz clic en cualquiera para verlo funcionando.

## Estructura

```
src/
├── App.jsx              -> define las rutas (una por ejercicio) y el índice
├── main.jsx             -> punto de entrada, envuelve la app en <BrowserRouter>
├── index.css            -> estilos generales
├── data/
│   ├── exercisesList.js -> lista de títulos para el índice
│   ├── workouts.js       -> datos de la app de rutinas deportivas (ej. 38-43)
│   ├── trivia.js         -> preguntas del juego trivial (ej. 44-49)
│   └── cuento.js         -> escenas del cuento interactivo (ej. 50)
└── exercises/
    ├── Ex001.jsx
    ├── Ex002.jsx
    ├── ...
    └── Ex050.jsx
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Ejercicios 1-50 libro de React"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git push -u origin main
```

(Reemplaza `TU_USUARIO/NOMBRE_REPO` con tu propio repositorio de GitHub,
créalo antes vacío desde la web de GitHub sin README para evitar conflictos).
