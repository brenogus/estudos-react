import { useState } from "react";
import "./styles.css";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  function salvarDados() {
    // Junta as duas memórias para criar uma terceira!
    setMensagem(
      `Cadastro salvo! Bem-vindo(a) ${nome}, você tem ${idade} anos.`
    );
  }

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>Cadastro de Aluno</h2>
      <input
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <br />

      <input
        placeholder="Digite sua idade"
        onChange={(e) => setIdade(e.target.value)}
      />
      <br />
      <br />

      <button onClick={salvarDados}>Salvar</button>
      <h2>
        {" "}
        {nome} {idade}{" "}
      </h2>

      <h3 style={{ color: "green" }}> {mensagem}</h3>
    </div>
  );
}
