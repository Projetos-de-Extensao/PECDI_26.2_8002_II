import { Link } from "react-router-dom";

export default function Alocacao() {
  return (
    <div>
      <h1>Alocação</h1>

      <button>Alocação Automática</button>

      {" "}

      <button>Ajuste Manual</button>

      <br /><br />

      <Link to="/dashboard">
        Voltar
      </Link>
    </div>
  );
}