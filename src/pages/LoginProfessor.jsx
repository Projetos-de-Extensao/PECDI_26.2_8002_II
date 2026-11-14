import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listarProfessores } from "../api/cliente";
import { salvarSessao } from "../api/sessao";

export default function LoginProfessor() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  async function entrar(event) {
    event.preventDefault();
    setErro("");
    setEnviando(true);
    try {
      const professores = await listarProfessores();
      const professor = professores.find((item) => item.email?.toLowerCase() === email.trim().toLowerCase());
      if (!professor || senha !== "123456") throw new Error("E-mail ou senha de teste inválidos.");
      salvarSessao({ papel: "professor", id: professor.id, nome: professor.nome });
      navigate("/professor");
    } catch (e) { setErro(e.message); }
    finally { setEnviando(false); }
  }

  return <div>
    <h1>Login do professor</h1>
    <p>Teste: professor@teste.com. Senha: 123456.</p>
    <form className="grade-form notas-form" onSubmit={entrar}>
      <label htmlFor="email-professor">E-mail</label>
      <input id="email-professor" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="senha-professor">Senha</label>
      <input id="senha-professor" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      <button type="submit" disabled={enviando}>Entrar</button>
    </form>
    {erro && <p role="alert">{erro}</p>}
    <Link className="action-link" to="/">Voltar</Link>
  </div>;
}
