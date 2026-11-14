import { Link } from "react-router-dom";
import { listarAlunos, listarMaterias, listarNotas } from "../api/cliente";
import useDados from "../api/useDados";

const carregar = () => Promise.all([listarAlunos(), listarMaterias(), listarNotas()]);
export default function ProfAlunoNotas() {
  const { dados, erro, carregando } = useDados(carregar);
  const [alunos = [], materias = [], notas = []] = dados ?? [];
  return <div className="notas-area">
    <h1>Notas dos alunos</h1>
    {carregando && <p>Carregando notas...</p>}
    {erro && <p role="alert">{erro}</p>}
    {dados && (notas.length === 0 ? <p>Nenhuma nota lançada.</p> : <ul className="notas-lista">
      {notas.map((nota) => <li key={nota.id}>
        <span>{alunos.find((aluno) => aluno.id === nota.alunoId)?.nome ?? "Aluno não encontrado"}
          <small>{materias.find((materia) => materia.id === nota.materiaId)?.nome ?? "Matéria não encontrada"}</small></span>
        <strong>{Number(nota.valor).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</strong>
      </li>)}
    </ul>)}
    <Link className="action-link" to="/professor">Voltar</Link>
  </div>;
}
