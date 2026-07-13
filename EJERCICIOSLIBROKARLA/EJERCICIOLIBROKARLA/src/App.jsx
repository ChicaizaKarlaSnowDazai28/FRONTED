import { Routes, Route, Link, useLocation } from "react-router-dom";
import exercisesList from "./data/exercisesList";
import Ex001 from "./exercises/Ex001";
import Ex002 from "./exercises/Ex002";
import Ex003 from "./exercises/Ex003";
import Ex004 from "./exercises/Ex004";
import Ex005 from "./exercises/Ex005";
import Ex006 from "./exercises/Ex006";
import Ex007 from "./exercises/Ex007";
import Ex008 from "./exercises/Ex008";
import Ex009 from "./exercises/Ex009";
import Ex010 from "./exercises/Ex010";
import Ex011 from "./exercises/Ex011";
import Ex012 from "./exercises/Ex012";
import Ex013 from "./exercises/Ex013";
import Ex014 from "./exercises/Ex014";
import Ex015 from "./exercises/Ex015";
import Ex016 from "./exercises/Ex016";
import Ex017 from "./exercises/Ex017";
import Ex018 from "./exercises/Ex018";
import Ex019 from "./exercises/Ex019";
import Ex020 from "./exercises/Ex020";
import Ex021 from "./exercises/Ex021";
import Ex022 from "./exercises/Ex022";
import Ex023 from "./exercises/Ex023";
import Ex024 from "./exercises/Ex024";
import Ex025 from "./exercises/Ex025";
import Ex026 from "./exercises/Ex026";
import Ex027 from "./exercises/Ex027";
import Ex028 from "./exercises/Ex028";
import Ex029 from "./exercises/Ex029";
import Ex030 from "./exercises/Ex030";
import Ex031 from "./exercises/Ex031";
import Ex032 from "./exercises/Ex032";
import Ex033 from "./exercises/Ex033";
import Ex034 from "./exercises/Ex034";
import Ex035 from "./exercises/Ex035";
import Ex036 from "./exercises/Ex036";
import Ex037 from "./exercises/Ex037";
import Ex038 from "./exercises/Ex038";
import Ex039 from "./exercises/Ex039";
import Ex040 from "./exercises/Ex040";
import Ex041 from "./exercises/Ex041";
import Ex042 from "./exercises/Ex042";
import Ex043 from "./exercises/Ex043";
import Ex044 from "./exercises/Ex044";
import Ex045 from "./exercises/Ex045";
import Ex046 from "./exercises/Ex046";
import Ex047 from "./exercises/Ex047";
import Ex048 from "./exercises/Ex048";
import Ex049 from "./exercises/Ex049";
import Ex050 from "./exercises/Ex050";

function Inicio() {
  return (
    <div>
      <h1>Ejercicios del libro de React (001-050)</h1>
      <p>PUCE Esmeraldas · 3er Parcial · Frontend</p>
      <ul className="lista-ejercicios">
        {exercisesList.map((ej) => (
          <li key={ej.id}>
            <Link to={`/ejercicio/${ej.id}`}>
              {ej.id} - {ej.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BarraNavegacion() {
  const location = useLocation();
  const enInicio = location.pathname === "/";
  if (enInicio) return null;
  return (
    <nav className="navbar">
      <Link to="/">← Volver al índice</Link>
    </nav>
  );
}

export default function App() {
  return (
    <div className="app">
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ejercicio/001" element={<Ex001 />} />
        <Route path="/ejercicio/002" element={<Ex002 />} />
        <Route path="/ejercicio/003" element={<Ex003 />} />
        <Route path="/ejercicio/004" element={<Ex004 />} />
        <Route path="/ejercicio/005" element={<Ex005 />} />
        <Route path="/ejercicio/006" element={<Ex006 />} />
        <Route path="/ejercicio/007" element={<Ex007 />} />
        <Route path="/ejercicio/008" element={<Ex008 />} />
        <Route path="/ejercicio/009" element={<Ex009 />} />
        <Route path="/ejercicio/010" element={<Ex010 />} />
        <Route path="/ejercicio/011" element={<Ex011 />} />
        <Route path="/ejercicio/012" element={<Ex012 />} />
        <Route path="/ejercicio/013" element={<Ex013 />} />
        <Route path="/ejercicio/014" element={<Ex014 />} />
        <Route path="/ejercicio/015" element={<Ex015 />} />
        <Route path="/ejercicio/016" element={<Ex016 />} />
        <Route path="/ejercicio/017" element={<Ex017 />} />
        <Route path="/ejercicio/018" element={<Ex018 />} />
        <Route path="/ejercicio/019" element={<Ex019 />} />
        <Route path="/ejercicio/020" element={<Ex020 />} />
        <Route path="/ejercicio/021" element={<Ex021 />} />
        <Route path="/ejercicio/022" element={<Ex022 />} />
        <Route path="/ejercicio/023" element={<Ex023 />} />
        <Route path="/ejercicio/024" element={<Ex024 />} />
        <Route path="/ejercicio/025" element={<Ex025 />} />
        <Route path="/ejercicio/026" element={<Ex026 />} />
        <Route path="/ejercicio/027" element={<Ex027 />} />
        <Route path="/ejercicio/028" element={<Ex028 />} />
        <Route path="/ejercicio/029" element={<Ex029 />} />
        <Route path="/ejercicio/030" element={<Ex030 />} />
        <Route path="/ejercicio/031" element={<Ex031 />} />
        <Route path="/ejercicio/032" element={<Ex032 />} />
        <Route path="/ejercicio/033" element={<Ex033 />} />
        <Route path="/ejercicio/034" element={<Ex034 />} />
        <Route path="/ejercicio/035" element={<Ex035 />} />
        <Route path="/ejercicio/036" element={<Ex036 />} />
        <Route path="/ejercicio/037" element={<Ex037 />} />
        <Route path="/ejercicio/038" element={<Ex038 />} />
        <Route path="/ejercicio/039" element={<Ex039 />} />
        <Route path="/ejercicio/040" element={<Ex040 />} />
        <Route path="/ejercicio/041" element={<Ex041 />} />
        <Route path="/ejercicio/042" element={<Ex042 />} />
        <Route path="/ejercicio/043" element={<Ex043 />} />
        <Route path="/ejercicio/044" element={<Ex044 />} />
        <Route path="/ejercicio/045" element={<Ex045 />} />
        <Route path="/ejercicio/046" element={<Ex046 />} />
        <Route path="/ejercicio/047" element={<Ex047 />} />
        <Route path="/ejercicio/048" element={<Ex048 />} />
        <Route path="/ejercicio/049" element={<Ex049 />} />
        <Route path="/ejercicio/050" element={<Ex050 />} />
      </Routes>
    </div>
  );
}
