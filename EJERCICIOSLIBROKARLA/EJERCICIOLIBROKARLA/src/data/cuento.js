// Fichero de datos del cuento interactivo (estructura tipo "elige tu propia aventura")
const escenas = {
  inicio: {
    texto: "Despiertas en un bosque oscuro. Hay dos caminos frente a ti.",
    imagen: "https://placehold.co/300x180?text=Bosque",
    opciones: [
      { texto: "Ir por el camino de la izquierda", destino: "cueva" },
      { texto: "Ir por el camino de la derecha", destino: "rio" },
    ],
  },
  cueva: {
    texto: "Encuentras una cueva misteriosa con un tesoro brillante.",
    imagen: "https://placehold.co/300x180?text=Cueva",
    opciones: [{ texto: "Volver al inicio", destino: "inicio" }],
  },
  rio: {
    texto: "Llegas a un río cristalino. A lo lejos ves un puente.",
    imagen: "https://placehold.co/300x180?text=Rio",
    opciones: [{ texto: "Volver al inicio", destino: "inicio" }],
  },
};

export default escenas;
