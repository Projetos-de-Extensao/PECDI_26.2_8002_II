import { Link } from "react-router-dom";

export default function CadastroAluno() {
  return (
    <div>
      <h1>Cadastro Aluno</h1>

      <input type="text" placeholder="Matrícula" />
      <br /><br />

      <input type="email" placeholder="E-mail" />
      <br /><br />

      <button>Salvar</button>

      {" "}

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}