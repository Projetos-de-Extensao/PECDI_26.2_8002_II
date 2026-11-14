import { useCallback } from "react";
import { Link } from "react-router-dom";
import { listarAlocacoesDoProfessor, listarSalas } from "../api/cliente";
import { lerSessao } from "../api/sessao";
import useDados from "../api/useDados";

function formatarData(data) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data ?? "")) return "Data não informada";
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default function SalaAlocada() {
  const professor = lerSessao();
  const carregar = useCallback(() => Promise.all([
    listarAlocacoesDoProfessor(professor.id),
    listarSalas(),
  ]), [professor.id]);
  const { dados, erro, carregando } = useDados(carregar);
  const [alocacoes = [], salas = []] = dados ?? [];

  return <div className="notas-area">
    <h1>Salas alocadas</h1>
    <p>Professor: {professor.nome}</p>
    {carregando && <p>Carregando alocações...</p>}
    {erro && <p role="alert">{erro}</p>}
    {dados && (alocacoes.length === 0 ? <p>Nenhuma sala alocada para este professor.</p> :
      <ul className="notas-lista">
        {alocacoes.map((alocacao) => {
          const sala = salas.find((item) => item.id === alocacao.salaId);
          return <li key={alocacao.id}>
            <span>
              <strong>{sala?.nome ?? "Sala não encontrada"}</strong>
              {sala && <small>Campus: {sala.campus} · Capacidade: {sala.capacidade}</small>}
              <small>Data: {formatarData(alocacao.data)}</small>
              <small>Horário: {alocacao.horaInicio && alocacao.horaFim ? `${alocacao.horaInicio} às ${alocacao.horaFim}` : "Não informado"}</small>
            </span>
          </li>;
        })}
      </ul>)}
    <Link className="action-link" to="/professor">Voltar</Link>
  </div>;
}
