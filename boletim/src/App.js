import "./styles.css";

function Boletim(props) {
  let conceito = "";
  let corDaBorda = "";

  if (props.nota >= 90) {
    conceito = "A (Excelente)";
    corDaBorda = "green";
  } else if (props.nota >= 80) {
    conceito = "B (Muito Bom)";
    corDaBorda = "blue";
  } else if (props.nota >= 60) {
    conceito = "C (Na média)";
    corDaBorda = "orange";
  } else {
    conceito = "D (Abaixo da média)";
    corDaBorda = "red";
  }

  return (
    <div
      style={{
        border: `3px solid ${corDaBorda}`,
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
        fontFamily: "sans-serif",
        backgroundColor: props.corFundo,
      }}
    >
      <h1>Aluno: {props.nome}</h1>
      <p>Nota final: {props.nota}</p>
      <p>
        <strong>{conceito}</strong>
      </p>
    </div>
  );
}

export default function App() {
  const alunos = [
    { nome: "João", nota: 95, corF: "gray" },
    { nome: "Maria", nota: 63, corF: "pink" },
    { nome: "Ana", nota: 40, corF: "gray" },
    { nome: "Pedro", nota: 90, corF: "pink" },
  ];
  return (
    <div>
      {alunos.map((item) => (
        <Boletim nome={item.nome} nota={item.nota} corFundo={item.corF} />
      ))}
    </div>
  );
}
