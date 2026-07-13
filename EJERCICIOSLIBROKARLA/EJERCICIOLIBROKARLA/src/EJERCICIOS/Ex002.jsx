import { Component, useState } from "react";


function ContadorFuncional() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Funcional: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }
  sumar = () => this.setState({ contador: this.state.contador + 1 });
  render() {
    return (
      <div>
        <p>Clase (POO): {this.state.contador}</p>
        <button onClick={this.sumar}>Sumar</button>
      </div>
    );
  }
}

export default function Ex002() {
  return (
    <div className="ejercicio">
      <h2>002 - Programación funcional y orientada a objetos</h2>
      <p>Dos formas de escribir el mismo contador en React:</p>
      <ContadorFuncional />
      <ContadorClase />
    </div>
  );
}
