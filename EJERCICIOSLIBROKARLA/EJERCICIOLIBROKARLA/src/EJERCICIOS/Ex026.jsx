function Post({ titulo, autor, contenido }) {
  return (
    <article style={{ border: "1px solid #ddd", borderRadius: 6, padding: 12, marginBottom: 10 }}>
      <h3>{titulo}</h3>
      <p><em>Por {autor}</em></p>
      <p>{contenido}</p>
    </article>
  );
}

export default function Ex026() {
  return (
    <div className="ejercicio">
      <h2>026 - Ejercicios props: Componente Post</h2>
      <Post
        titulo="Aprendiendo React"
        autor="La K"
        contenido="Hoy practiqué props pasando datos entre componentes."
      />
      <Post
        titulo="Segundo post"
        autor="La K"
        contenido="Los componentes reutilizables ahorran muchísimo código."
      />
    </div>
  );
}
