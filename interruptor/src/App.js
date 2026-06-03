import { useState } from "react";
import "./styles.css";

export default function App() {
  // começa como false (lâmpada desligada)

  const [ligado, setLigado] = useState(false);

  function alternar() {
    // se está true, vira false, se esta false, vira true.
    setLigado(!ligado);
  }
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: ligado ? "#fff9c4" : "#2c3e50",
        color: ligado ? "#000" : "#fff",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>{ligado ? "luz acesa " : "luz apagada"}</h1>
      <button onClick={alternar} style={{ padding: "10px 20px" }}>
        Interruptor
      </button>
    </div>
  );
}
