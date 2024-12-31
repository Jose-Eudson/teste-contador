import React, { useState } from "react";
import './App.css';

export default function App() {
  const [numero, setNumero] = useState<number>(0);

  function aumentar() {
    setNumero(numero + 1);
  }

  function diminuir() {
    setNumero(numero - 1);
  }

  function resetar() {
    setNumero(0);
  }

  return (
    <section>
      <h1>Contador</h1>
      <p>{numero}</p>
      <div className="button-container">
        <button onClick={diminuir}>-</button>
        <button className="resetar" onClick={resetar}>Resetar</button>
        <button onClick={aumentar}>+</button>
      </div>
    </section>
  );
}
