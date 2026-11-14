import { useState } from "react";
import { Link } from "react-router-dom";
import { listarAlunos, listarMaterias, salvarNota } from "../api/cliente";
import useDados from "../api/useDados";

const carregar = () => Promise.all([listarAlunos(), listarMaterias()]);
export default function AlunoAtribuir() {
  const [alunoId, setAlunoId] = useState("");
  const [materiaId, setMateriaId] = useState("");
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [salvando, setSalvando] = useState(false);
  const { dados, erro, carregando } = useDados(carregar);
  const [alunos = [], materias = []] = dados ?? [];
  async function handleSubmit(event) {
    event.preventDefault();
    setMensagem("");
    setSalvando(true);
    try {
      await salvarNota({ alunoId, materiaId, valor });
      setMensagem("Nota salva. Ela já está disponível para consulta.");
      setValor("");
    } catch (erro) { setMensagem(erro.message); }
    finally { setSalvando(false); }
  }
  return <div className="notas-area">
    <h1>Lançar nota</h1>
    <p>Selecione um aluno e uma matéria para simular o lançamento.</p>
    {carregando && <p>Carregando dados...</p>}
    {erro && <p role="alert">{erro}</p>}
    {dados && <form className="grade-form notas-form" onSubmit={handleSubmit}>
      <label htmlFor="aluno">Aluno</label>
      <select id="aluno" value={alunoId} onChange={(e) => setAlunoId(e.target.value)} required>
        <option value="">Selecione um aluno</option>
        {alunos.map((aluno) => <option key={aluno.id} value={aluno.id}>{aluno.nome} — {aluno.matricula}</option>)}
      </select>
      <label htmlFor="materia">Matéria</label>
      <select id="materia" value={materiaId} onChange={(e) => setMateriaId(e.target.value)} required>
        <option value="">Selecione uma matéria</option>
        {materias.map((materia) => <option key={materia.id} value={materia.id}>{materia.nome}</option>)}
      </select>
      <label htmlFor="nota">Nota (de 0 a 10)</label>
      <input id="nota" type="number" min="0" max="10" step="0.01" value={valor} onChange={(e) => setValor(e.target.value)} required />
      <p className="notas-ajuda">Um novo lançamento para o mesmo aluno e matéria substitui a nota anterior.</p>
      <button type="submit" disabled={salvando}>{salvando ? "Salvando..." : "Salvar nota"}</button>
    </form>}
    {mensagem && <p className="notas-mensagem" role="status">{mensagem}</p>}
    <Link className="action-link" to="/aluno-notas">Consultar notas</Link>
    <Link className="action-link" to="/professor">Voltar</Link>
  </div>;
}
