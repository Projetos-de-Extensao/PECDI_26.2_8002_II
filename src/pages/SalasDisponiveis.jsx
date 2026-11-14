import { Link } from "react-router-dom";
import { listarSalas } from "../api/cliente";
import useDados from "../api/useDados";

export default function SalasDisponiveis() {
  const { dados, erro, carregando } = useDados(listarSalas);
  const salas = dados?.filter((sala) => sala.disponivel && sala.vagasDisponiveis > 0) ?? [];
  return (
    <div className="notas-area">
      <h1>Salas disponíveis</h1>
      <p>Consulte as salas com vagas nos dados de teste.</p>
      {carregando && <p>Carregando salas...</p>}
      {erro && <p role="alert">{erro}</p>}
      {!carregando && !erro && salas.length === 0 && <p>Nenhuma sala disponível no momento.</p>}
      {salas.length > 0 && <ul className="notas-lista">
        {salas.map((sala) => <li key={sala.id}>
          <span><strong>{sala.nome}</strong><small>Campus: {sala.campus} · Capacidade: {sala.capacidade}</small></span>
          <span>{sala.vagasDisponiveis} vagas</span>
        </li>)}
      </ul>}
      <Link className="action-link" to="/aluno">Voltar</Link>
    </div>
  );
}
