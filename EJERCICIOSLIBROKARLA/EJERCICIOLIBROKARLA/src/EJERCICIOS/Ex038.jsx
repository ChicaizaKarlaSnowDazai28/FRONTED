import workouts from "../data/workouts";

export default function Ex038() {
  return (
    <div className="ejercicio">
      <h2>038 - Aplicación de rutinas deportivas</h2>
      <p>Primer paso: listar los títulos de las rutinas disponibles.</p>
      <ul>
        {workouts.map((w) => (
          <li key={w.id}>{w.title}</li>
        ))}
      </ul>
    </div>
  );
}
