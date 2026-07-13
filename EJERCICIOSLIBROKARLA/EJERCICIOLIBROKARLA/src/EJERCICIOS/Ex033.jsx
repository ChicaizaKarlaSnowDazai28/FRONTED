import styled from "styled-components";

const BotonBase = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #4f46e5;
  color: white;

  &:hover {
    background: #4338ca;
  }
`;

// Herencia de estilos con styled(Componente)
const BotonPeligro = styled(BotonBase)`
  background: #dc2626;

  &:hover {
    background: #b91c1c;
  }
`;

export default function Ex033() {
  return (
    <div className="ejercicio">
      <h2>033 - Styled components: Hover, herencia y atributos</h2>
      <BotonBase>Botón normal (hover cambia color)</BotonBase>{" "}
      <BotonPeligro>Botón peligro (hereda de BotonBase)</BotonPeligro>
    </div>
  );
}
