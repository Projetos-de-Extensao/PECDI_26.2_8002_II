import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listarAlunos } from "../api/cliente";
import { salvarSessao } from "../api/sessao";

export default function LoginAluno() {
  const [identificador, setIdentificador] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  async function entrar(event) {
    event.preventDefault();
    setErro("");
    setEnviando(true);
    try {
      const alunos = await listarAlunos();
      const busca = identificador.trim().toLowerCase();
      const aluno = alunos.find((item) => item.matricula === busca || item.email?.toLowerCase() === busca);
      if (!aluno || senha !== "123456") throw new Error("Matrícula, e-mail ou senha de teste inválidos.");
      salvarSessao({ papel: "aluno", id: aluno.id, nome: aluno.nome });
      navigate("/aluno");
    } catch (e) { setErro(e.message); }
    finally { setEnviando(false); }
  }

  return <div>
    <h1>Login do aluno</h1>
    <p>Teste: matrícula 2026001 ou 2026002. Senha: 123456.</p>
    <form className="grade-form notas-form" onSubmit={entrar}>
      <label htmlFor="identificador-aluno">Matrícula ou e-mail</label>
      <input id="identificador-aluno" value={identificador} onChange={(e) => setIdentificador(e.target.value)} required />
      <label htmlFor="senha-aluno">Senha</label>
      <input id="senha-aluno" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      <button type="submit" disabled={enviando}>Entrar</button>
    </form>
    {erro && <p role="alert">{erro}</p>}
    <Link className="action-link" to="/">Voltar</Link>
  </div>;
}
