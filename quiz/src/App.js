import { useState } from "react";
import "./styles.css";

// ==========================================
// 1. OS DADOS (O Banco de Perguntas)
// ==========================================
const listaDePerguntas = [
  {
    texto: "O que o useState faz no React?",
    opcoes: [
      "Deleta o banco de dados",
      "Guarda a memória do componente",
      "Muda a cor de fundo",
      "Cria um loop infinito",
    ],
    respostaCorreta: "Guarda a memória do componente",
  },
  {
    texto: "Qual método usamos para criar listas no React?",
    opcoes: [".map()", ".for()", ".push()", ".list()"],
    respostaCorreta: ".map()",
  },
  {
    texto: "O que significa o 'e' no onChange={(e) => ...}?",
    opcoes: ["Erro", "Elemento", "Evento", "Especial"],
    respostaCorreta: "Evento",
  },
];

// ==========================================
// 2. O COMPONENTE PRINCIPAL
// ==========================================
export default function AppQuiz() {
  // Qual pergunta estamos vendo agora? (Começa no índice 0)
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  // Quantos acertos o aluno teve?
  const [pontuacao, setPontuacao] = useState(0);

  // O jogo acabou? (Começa falso)
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // ==========================================
  // 3. A LÓGICA DO CLIQUE
  // ==========================================
  function aoResponder(opcaoEscolhida) {
    // 1. Verifica se acertou
    const acertou =
      opcaoEscolhida === listaDePerguntas[perguntaAtual].respostaCorreta;
    if (acertou) {
      setPontuacao(pontuacao + 1);
    }

    // 2. Avança para a próxima pergunta
    const proximaPergunta = perguntaAtual + 1;

    // Se ainda tem perguntas, avança. Se não, mostra o resultado final.
    if (proximaPergunta < listaDePerguntas.length) {
      setPerguntaAtual(proximaPergunta);
    } else {
      setMostrarResultado(true);
    }
  }

  function reiniciarQuiz() {
    setPerguntaAtual(0);
    setPontuacao(0);
    setMostrarResultado(false);
  }

  // ==========================================
  // 4. O VISUAL (JSX)
  // ==========================================
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#6366f1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      {/* Container que imita a tela do celular */}
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        {/* RENDERIZAÇÃO CONDICIONAL: Mostra o Resultado OU Mostra a Pergunta */}
        {mostrarResultado ? (
          /* === TELA DE RESULTADO === */
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "48px", margin: "0 0 10px 0" }}>🏆</h1>
            <h2 style={{ color: "#1f2937", marginBottom: "10px" }}>
              Fim de Jogo!
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#4b5563",
                marginBottom: "30px",
              }}
            >
              Você acertou <strong>{pontuacao}</strong> de{" "}
              {listaDePerguntas.length} perguntas.
            </p>
            <button
              onClick={reiniciarQuiz}
              style={{
                backgroundColor: "#4f46e5",
                color: "white",
                border: "none",
                padding: "12px 24px",
                fontSize: "16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              Tentar Novamente 🔄
            </button>
          </div>
        ) : (
          /* === TELA DE PERGUNTAS === */
          <div>
            {/* Cabeçalho: Pergunta 1 de 3 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                color: "#6b7280",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <span>
                Pergunta {perguntaAtual + 1} / {listaDePerguntas.length}
              </span>
              <span>Pontos: {pontuacao}</span>
            </div>

            {/* O Texto da Pergunta */}
            <h2
              style={{
                color: "#111827",
                fontSize: "20px",
                marginBottom: "24px",
                lineHeight: "1.4",
              }}
            >
              {listaDePerguntas[perguntaAtual].texto}
            </h2>

            {/* As Opções de Resposta (.map em ação!) */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {listaDePerguntas[perguntaAtual].opcoes.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() => aoResponder(opcao)}
                  style={{
                    backgroundColor: "#f3f4f6",
                    border: "2px solid #e5e7eb",
                    padding: "14px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    color: "#374151",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "0.2s",
                    fontWeight: "500",
                  }}
                  onMouseOver={(e) => (e.target.style.borderColor = "#6366f1")}
                  onMouseOut={(e) => (e.target.style.borderColor = "#e5e7eb")}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
