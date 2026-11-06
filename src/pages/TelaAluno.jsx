import { Link } from "react-router-dom";

export default function TelaAluno() {
  return (
    <div>
      <h1>Área do Aluno</h1>

      <ul className="navigation-list">
        <li><Link to="/sala-disponiveis">Salas Disponíveis</Link></li>
        <li><Link to="/aluno-nota">Sua Nota</Link></li>
      </ul>
    </div>
  );
}