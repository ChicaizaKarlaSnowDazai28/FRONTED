import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  body {
    background: #fafafa;
  }
`;

const Caja = styled.div`
  padding: 16px;
  background: #e0f2fe;
  border-radius: 8px;

  @media (max-width: 600px) {
    background: #fee2e2;
  }
`;

export default function Ex034() {
  return (
    <div className="ejercicio">
      <EstiloGlobal />
      <h2>034 - Styled components: Mediaqueries, estilos del body</h2>
      <Caja>
        Achica la ventana del navegador a menos de 600px de ancho: esta caja
        cambia de color azul a rojo.
      </Caja>
    </div>
  );
}
