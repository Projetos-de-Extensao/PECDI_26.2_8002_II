import { Link } from "react-router-dom";

export default function CadastroTurma() {
  return (
    <div>
      <h1>Cadastro Turma</h1>

      <input type="text" placeholder="ID da Turma" />
      <br /><br />

      <button>Salvar</button>

      {" "}

      <Link to="/dashboard">Voltar</Link>
    </div>
  );
}