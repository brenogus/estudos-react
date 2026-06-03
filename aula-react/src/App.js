import "./styles.css";

function Cartao(props) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
        fontFamily: "sans-serif",
        backgroundColor: props.concluida ? "#d4edda" : "#ffffff",
      }}
    >
      <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
      <p>
        <strong>Status: </strong>
        {props.concluida ? "✅ Finalizada" : "❌Pendente"}
      </p>
    </div>
  );
}

export default function App() {
  const tarefas = [
    { titulo: "Estudar React", desc: "Ver componentes", concluida: true },
    { titulo: "Fazer cafe", desc: "Essencial para o código", concluida: false },
    { titulo: "Dormir", desc: "Amanhã tem mais", concluida: true },
  ];
  return (
    <div>
      {tarefas.map((item) => (
        <Cartao
          titulo={item.titulo}
          descricao={item.desc}
          concluida={item.concluida}
        />
      ))}
    </div>
  );
}
