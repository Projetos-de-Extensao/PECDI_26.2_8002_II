import { useCallback } from "react";
import { Link } from "react-router-dom";
import { listarMaterias, listarNotasDoAluno } from "../api/cliente";
import { lerSessao } from "../api/sessao";
import useDados from "../api/useDados";

export default function AlunoNota() {
  const aluno = lerSessao();
  const carregar = useCallback(() => Promise.all([listarMaterias(), listarNotasDoAluno(aluno.id)]), [aluno.id]);
  const { dados, erro, carregando } = useDados(carregar);
  const [materias = [], notas = []] = dados ?? [];

  return <div className="notas-area">
    <h1>Suas notas</h1>
    <p>Aluno: {aluno.nome}</p>
    {carregando && <p>Carregando notas...</p>}
    {erro && <p role="alert">{erro}</p>}
    {dados && (notas.length === 0 ? <p>Nenhuma nota lançada.</p> : <ul className="notas-lista">
      {notas.map((nota) => <li key={nota.id}>
        <span>{materias.find((materia) => materia.id === nota.materiaId)?.nome ?? "Matéria não encontrada"}</span>
        <strong>{Number(nota.valor).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</strong>
      </li>)}
    </ul>)}
    <Link className="action-link" to="/aluno">Voltar</Link>
  </div>;
}
