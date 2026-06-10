import { useState } from "react";
import "./styles.css";

// ==========================================
// PEÇA 1: O Post com Curtida
// ==========================================
function PostInterativo() {
  const [curtido, setCurtido] = useState(false);
  const [curtidas, setCurtidas] = useState(999);

  function alternarCurtida() {
    setCurtido(!curtido);
    setCurtidas(curtido ? curtidas - 1 : curtidas + 1);
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>@brenogus</h3>
      <p style={{ color: "#555" }}>Enxergue tudo de maneira holistica 🚀💻</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={alternarCurtida}
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          {curtido ? "❤️" : "🤍"}
        </button>
        <span style={{ fontWeight: "bold", color: "#444" }}>
          {curtidas} curtidas
        </span>
      </div>
    </div>
  );
}

// ==========================================
// PEÇA 2: O Card de Spoiler / FAQ
// ==========================================
function CardSpoiler() {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, color: "#333", fontSize: "16px" }}>
          Dica Secreta de React 🕵️‍♂️
        </h3>
        <button
          onClick={() => setAberto(!aberto)}
          style={{
            padding: "8px 12px",
            backgroundColor: aberto ? "#e11d48" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {aberto ? "Esconder" : "Revelar"}
        </button>
      </div>

      {aberto && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#fef2f2",
            borderLeft: "4px solid #e11d48",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: 0, color: "#be123c", fontWeight: "bold" }}>
            Nunca altere uma variável de estado diretamente! Use sempre o Set
            (ex: setContador).
          </p>
        </div>
      )}
    </div>
  );
}

// ==========================================
// PEÇA 3: A Caixa de Mensagens (Completa)
// ==========================================
function NovaMensagem() {
  const [texto, setTexto] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const limite = 100;
  const restantes = limite - texto.length;
  const corDoAviso =
    restantes < 0 ? "#e11d48" : restantes < 20 ? "#d97706" : "#6b7280";

  function enviar() {
    if (texto.trim() === "" || restantes < 0) return;
    setComentarios([...comentarios, texto]);
    setTexto("");
  }

  function resetarComentario() {
    setComentarios([]);
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#333" }}>
        Deixe um comentário
      </h3>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="O que você achou da aula?"
        style={{
          width: "100%",
          height: "80px",
          padding: "10px",
          borderRadius: "6px",
          border: `2px solid ${restantes < 0 ? "#e11d48" : "#d1d5db"}`,
          outline: "none",
          fontSize: "14px",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <span
          style={{ color: corDoAviso, fontWeight: "bold", fontSize: "14px" }}
        >
          {restantes} caracteres restantes
        </span>
        <button
          onClick={enviar}
          disabled={restantes < 0 || texto.length === 0}
          style={{
            padding: "8px 16px",
            backgroundColor:
              restantes < 0 || texto.length === 0 ? "#d1d5db" : "#10b981",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor:
              restantes < 0 || texto.length === 0 ? "not-allowed" : "pointer",
            fontWeight: "bold",
            transition: "0.2s",
          }}
        >
          Enviar
        </button>

        <button
          onClick={resetarComentario}
          style={{
            padding: "8px 16px",
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            transition: "0.2s",
          }}
        >
          Resetar
        </button>
      </div>

      {comentarios.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            borderTop: "1px solid #eee",
            paddingTop: "15px",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0", color: "#555" }}>
            Comentários Recentes:
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {comentarios.map((comentario, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  color: "#374151",
                  border: "1px solid #e5e7eb",
                  wordBreak: "break-word",
                }}
              >
                💬 {comentario}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ==========================================
// A TELA PRINCIPAL (Onde montamos o Lego)
// ==========================================
export default function MeuAppMobile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Container que imita a tela de um celular */}
      <div style={{ width: "100%", maxWidth: "400px" }}>
        {/* Cabeçalho do App */}
        <div
          style={{
            backgroundColor: "#1e293b",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            marginBottom: "20px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "22px" }}>📱 Meu Primeiro App</h1>
          <p
            style={{ margin: "5px 0 0 0", color: "#94a3b8", fontSize: "14px" }}
          >
            Laboratório de React
          </p>
        </div>

        {/* Chamando as peças de Lego! */}
        <PostInterativo />
        <CardSpoiler />
        <NovaMensagem />
      </div>
    </div>
  );
}
