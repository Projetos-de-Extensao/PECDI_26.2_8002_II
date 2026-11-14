import { Link, useNavigate } from "react-router-dom";
import { lerSessao, sair } from "../api/sessao";

export default function TelaAluno() {
  const navigate = useNavigate();
  const sessao = lerSessao();
  function encerrar() { sair(); navigate("/"); }
  return <div>
    <h1>Área do Aluno</h1>
    <p>Olá, {sessao.nome}.</p>
    <ul className="navigation-list">
      <li><Link to="/sala-disponiveis">Salas disponíveis</Link></li>
      <li><Link to="/aluno-nota">Suas notas</Link></li>
    </ul>
    <button type="button" onClick={encerrar}>Sair</button>
  </div>;
}
