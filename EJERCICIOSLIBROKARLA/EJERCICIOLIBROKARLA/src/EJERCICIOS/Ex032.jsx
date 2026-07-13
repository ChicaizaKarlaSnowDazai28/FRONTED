import styled from "styled-components";

const Boton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
`;

export default function Ex032() {
  return (
    <div className="ejercicio">
      <h2>032 - Styled components</h2>
      <p>Componente de botón estilizado con la librería styled-components.</p>
      <Boton>Botón estilizado</Boton>
    </div>
  );
}
