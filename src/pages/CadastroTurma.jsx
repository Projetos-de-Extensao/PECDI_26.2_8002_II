import { Link } from "react-router-dom";

export default function CadastroTurma() {
  return (
    <div>
      <h1>Cadastro Turma</h1>

      <input type="text" placeholder="ID da Turma" />
      <br /><br />

       <input type="text" placeholder="Professor" />
      <br /><br />

       <input type="text" placeholder="Aluno" />
      <br /><br />

       <input type="text" placeholder="Materia" />
      <br /><br />

    

      <button>Salvar</button>

      {" "}

      <Link className="action-link" to="/dashboard">Voltar</Link>
    </div>
  );
}