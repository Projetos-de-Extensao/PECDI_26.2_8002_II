import { Link } from "react-router-dom";

export default function Alocacao() {
  return (
    <div>
      <h1>Alocação</h1>

      <div className="allocation-actions">
        <button type="button">Alocação Automática</button>
        <button type="button">Ajuste Manual</button>
      </div>

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}