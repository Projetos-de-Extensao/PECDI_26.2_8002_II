import { Link, useNavigate } from "react-router-dom";
import { sair } from "../api/sessao";

export default function TelaProfessor() {
  const navigate = useNavigate();
  function encerrar() { sair(); navigate("/"); }
  return <div>
    <h1>Área do Professor</h1>
    <ul className="navigation-list">
      <li><Link to="/sala-alocada">Sala alocada</Link></li>
      <li><Link to="/aluno-notas">Notas dos alunos</Link></li>
      <li><Link to="/lancar-nota">Lançar nota simulada</Link></li>
    </ul>
    <button type="button" onClick={encerrar}>Sair</button>
  </div>;
}
