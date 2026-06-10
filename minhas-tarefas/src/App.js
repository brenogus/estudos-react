import { useState } from "react";
import "./styles.css";

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Aprender React", "Dominar o useState"]);

  function adicionarNaLista() {
    // Validação
    if (novaTarefa.trim() === "") return;

    setLista([...lista, novaTarefa]);
    setNovaTarefa("");
  }

  function resetar() {
    setLista(["Aprender React", "Dominar o useState"]);
    setNovaTarefa("");
  }

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#f3f4f6",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#1f2937",
            textAlign: "center",
            marginTop: "0",
            fontSize: "24px",
          }}
        >
          Minhas Tarefas
        </h1>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="O que vamos fazer"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "16px",
              outline: "nome",
            }}
          />

          <button
            onClick={adicionarNaLista}
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            +
          </button>
          <button
            onClick={resetar}
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Resetar
          </button>
        </div>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {lista.map((item, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                padding: "12px 15px",
                borderRadius: "8px",
                color: "#374151",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px" }}>👌</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
